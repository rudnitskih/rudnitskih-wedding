#!/bin/sh
magick mogrify -resize '1920>' -quality 70  dist/images/*.jpg
