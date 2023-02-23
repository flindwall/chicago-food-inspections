
#  To eat or not to eat...

- An analysis of the Chicago food inspections data set using Python and Leaflet

## Dependencies and Setup

```bash
import pandas as pd
import datetime
import matplotlib.pyplot as plt
import warnings
warnings.filterwarnings('ignore')
```


## Roadmap

- Import data set through downloaded CSV from [Chicago Data Portal](https://data.cityofchicago.org/Health-Human-Services/Food-Inspections/4ijn-s7e5)

- Clean data set to drop columns not relevant to analysis

- Convert Inspection Date to datetime object

- Rename values in Inspection Date columns

- Streamline misspellings for Chicago and drop NaN values

- Analyze data for trends or correlations between risk types and results

- Use Leaflet to create a map that plots restaurants inspected in the year 2022 in the city of Chicago, based on their longitude and latitude
    - Data markers reflect the name, address, risk score and results.
    
![App Screenshot](insert photo of our map)

- Create a legend

- Deploy app to a free static page

![My_Image](https://github.com/flindwall/chicago-food-inspections/blob/main/Output/CountofRiskType.png)



## Demo (need to update with our map)

[Click Here](http://127.0.0.1:5501/chicago-food-inspections/index.html) 

![App Screenshot](https://raw.githubusercontent.com/gnimeth/Earthquake_data/main/Output/Screenshot_20230212_063133.png)

## Resources
- City of Chicago. (2023). Food Inspections. data.cityofchicago.org. https://data.cityofchicago.org/Health-Human-Services/Food-Inspections/4ijn-s7e5

- City of Chicago. (2023). Understand Health Code Requirements for Food Establishments. www.chicago.gov. https://www.chicago.gov/city/en/depts/cdph/provdrs/healthy_restaurants/svcs/understand_healthcoderequirementsforfoodestablishments.html
