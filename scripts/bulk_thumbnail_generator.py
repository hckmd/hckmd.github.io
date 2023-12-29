import os
import glob
import math

from PIL import Image

# Hardcoded for now, since this is only used for the Japan 2023 travel log
PATH = "./japan-2023/images"
NEW_HEIGHT = 300
QUALITY = 80

# get all the jpg files from the current folder
for infile in glob.glob(f"{PATH}/*.jpg"):
    print(f"Processing thumbnail for {os.path.basename(infile)}")
    im = Image.open(infile)
    
    ratio =  NEW_HEIGHT / im.size[1]
    new_width = math.floor(ratio * im.size[0])
    im = im.resize((new_width, NEW_HEIGHT), Image.Resampling.LANCZOS)

    im.save(f"{PATH}/thumbs/thumb_{os.path.basename(infile)}", "JPEG", quality=QUALITY)
