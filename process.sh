cd raw_maps
unzip \*.zip
cd ..
gdal_merge.py -o merged/merged.tif raw_maps/*.tif 
gdalwarp -t_srs EPSG:3857 -r average merged/merged.tif warped/warped.tif
gdal2tiles.py -w none -s EPSG:3857 warped/warped.tif tiles
s3cmd put --recursive tiles/ s3://liard-map-tiles/
