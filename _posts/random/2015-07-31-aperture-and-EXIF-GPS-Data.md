---
title: 		Aperture and EXIF GPS Data
date: 		2015-07-31 14:00:00
thumbnail:
category:	random
tags: 		[random, development]
keywords:
description:
---
It appears that over time, applications I use tend to mysteriously lose functionality when they are "updated" or "new" versions are released. Yes, I use [Apple Inc.][Apple] products. The latest seems to be the inability to set GPS data in photographs that don't already contain them. [Apple's][Apple] new [Photos][Photos] application completely lacks the feature and [Aperture][Aperture] (no longer being updated) will not allow modification of the originals. Hence, there I was, just back from a trip around the [Grand Canyon][GrandCanyon] with a bunch of photos that needed to be Geo-tagged and no easy way to do it.

Yes, You can geo-tag in [Aperture][Aperture], but the tags are only within [Aperture][Aperture] -- they are not written to the "Master" or "Original." I wanted them in the original, mostly for safety sake. I've had software corrupt itself before. I didn't want to go to the effort of tagging everything only to lose it if Aperture (or a future [Apple Inc.][Apple] product) decided to munge itself.

The Internet provided a few pay applications for this purpose. [HoudaGeo][HoudaGeo] being one that seemed to work. But I was reluctant to spend the $30USD for something I knew could be done easier and cheaper.

I worked at the `bash` command line with [`exiftool`][EXIFTool] for some time before deciding to use [AppleScript][AppleScript] rather than `bash` or `Python` as a control script. [AppleScript][AppleScript] was the only way I could find to get the underlying "managed" file names of the photos within [Aperture][Aperture]. [Lindsay Berger](http://bergersoft.com/personal/AppleScript/) has a well done script that displays the EXIF data from [Aperture][Aperture]. Some simple modifications
were all I needed. In the end, the [AppleScript][AppleScript] below did the trick, with [`exiftool`][EXIFTool] installed and doing the grunt-work in the background.

{% gist stephenhouser/5ff52a6105ca1451d500bd221d64f93d %}

<!--
````AppleScript
-- Script Name: Aperture Update EXIF GPS Data
-- Description: This AppleScript will use EXIFtool to set EXIF GPS data for the photos 
-- selected in Aperture. The GPS data is taken from Aperture's data for the photo
--
-- Author: Stepehen Houser (http://stephenhouser.com)
-- Adapted from: Lindsay Berger (http://bergersoft.com/personal/AppleScript/)
-- Date: July 2015

on run
    set EXIFoutput to return
    -- leave this blank to get all EXIF data, otherwise specify which fields you want
    set DesiredEXIFData to ""
    -- set DesiredEXIFData to "-PictureControlName -LensId, -Flash"
    
    tell application "Aperture"
        set imageSel to (get selection)
    end tell
    if imageSel is {} then
        display dialog "Please select an image in Aperture" with title "EXIF Data" buttons {"Okay"}
        return
    else
        repeat with cur_pic in imageSel
            tell application "Aperture"
                tell library 1
                    tell cur_pic
                        set lat to get latitude
                        set lon to get longitude
                    end tell
                end tell
            end tell
            
            set myPath to getPath(cur_pic)
            
            log "/usr/local/bin/exiftool -overwrite_original_in_place -P -exif:GPSLatitude=" & lat & " -exif:GPSLatitudeRef=North -exif:GPSLongitude=" & lon & " -exif:GPSLongitudeRef=West " & myPath
            do shell script "/usr/local/bin/exiftool -overwrite_original_in_place -P -exif:GPSLatitude=" & lat & " -exif:GPSLatitudeRef=North -exif:GPSLongitude=" & lon & " -exif:GPSLongitudeRef=West " & myPath
            
            #set EXIFoutput to EXIFoutput & myPath & return
            #set EXIFoutput to do shell script "/usr/local/bin/exiftool -t " & DesiredEXIFData & " " & myPath
            #set the clipboard to EXIFoutput
            #set EXIFoutput to formatText(EXIFoutput, return)
            #choose from list EXIFoutput with title "List Exif Metadata" with prompt "Picture:" & return & myPath OK button name "OK" cancel button name "Cancel" with empty selection allowed          
        end repeat
    end if
end run

on getPath(aItem)
    tell application "Aperture"
        tell library 1
            tell aItem
                set MasterFile to (get value of other tag "FileName")
                set isReferenced to get referenced
                if isReferenced then
                    set FinderPath to choose file MasterFile with prompt "Please locate referenced file"
                    set thePath to POSIX path of FinderPath
                else
                    set ImpGroup to (get value of other tag "ImportGroup")
                    set MasterPath to my GetMasterPath(ImpGroup)
                    set MasterPath to my getLibPath() & MasterPath
                    set thePath to quoted form of (MasterPath & MasterFile)
                end if
            end tell
        end tell
    end tell
    return thePath
end getPath

on GetMasterPath(aStr)
    set tid to AppleScript's text item delimiters
    set AppleScript's text item delimiters to "-"
    set aYear to text item 1 of aStr
    set aMonth to text item 2 of aStr
    set aRest to text item 3 of aStr
    set AppleScript's text item delimiters to " @ "
    set aDay to text item 1 of aRest
    set aRest to text item 2 of aRest
    set AppleScript's text item delimiters to ":"
    set anHour to text item 1 of aRest
    set aMinute to text item 2 of aRest
    set aRest to text item 3 of aRest
    set AppleScript's text item delimiters to " "
    set aSecond to text item 1 of aRest
    set AmPm to text item 2 of aRest
    if AmPm is equal to "PM" then
        set anHour to anHour + 12
    end if
    set AppleScript's text item delimiters to "/"
    set aRest to {"", "Masters", aYear, aMonth, aDay, aYear & aMonth & aDay & "-" & anHour & aMinute & aSecond, ""} as text
    set AppleScript's text item delimiters to tid
    return aRest
end GetMasterPath

on getLibPath()
    tell application "System Events" to set p_libPath to value of property list item "LibraryPath" of property list file ((path to preferences as Unicode text) & "com.apple.aperture.plist")
    
    if ((offset of "~" in p_libPath) is not 0) then
        set p_script to "/bin/echo $HOME"
        set p_homePath to (do shell script p_script)
        
        set p_offset to offset of "~" in p_libPath
        set p_path to text (p_offset + 1) thru -1 of p_libPath
        
        set g_libPath to p_homePath & p_path
        return g_libPath
    else
        return p_libPath
    end if
    
end getLibPath

on formatText(aStr, aDelimiter)
    set oldDelimiters to AppleScript's text item delimiters
    set AppleScript's text item delimiters to aDelimiter
    set theArray to every text item of aStr
    set AppleScript's text item delimiters to oldDelimiters
    
    return theArray
end formatText
````
-->

  [Apple]: http://apple.com
  [Photos]: https://www.apple.com/osx/photos/
  [Aperture]: https://en.wikipedia.org/wiki/Aperture_(software)
  [GrandCanyon]: http://www.nps.gov/grca/index.htm
  [HoudaGeo]: http://www.houdah.com
  [EXIFtool]: http://www.sno.phy.queensu.ca/~phil/exiftool/
  [AppleScript]: https://en.wikipedia.org/wiki/AppleScript