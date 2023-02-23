
#  To eat or not to eat...

- An analysis of the Chicago food inspections data set using Python and Leaflet <br />
**Data Description:** This information is derived from inspections of restaurants and other food establishments in Chicago from January 1, 2010 to the present. Inspections are performed by staff from the Chicago Department of Public Health’s Food Protection Program. Inspections are done using a standardized procedure. The results of the inspection are inputted into a database, then reviewed and approved by a State of Illinois Licensed Environmental Health Practitioner (LEHP). A subset of data elements are extracted from this database and downloaded into this data portal. <br />
![My_Image](https://github.com/flindwall/chicago-food-inspections/blob/main/Output/Food%20Image.jpg)


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
# Results

**Results by Inspection** <br />
Results: An inspection can pass, pass with conditions or fail. Establishments receiving a  ‘pass’ were found to have no critical or serious violations (violation number 1-14 and 15-29, respectively). Establishments receiving a ‘pass with conditions’ were found to have critical or serious violations, but these were corrected during the inspection. Establishments receiving a ‘fail’ were found to have critical or serious violations that were not correctable during the inspection. An establishment receiving a ‘fail’ does not necessarily mean the establishment’s licensed is suspended. Establishments found to
 be out of business or not located are indicated as such. 

![My_Image](https://github.com/flindwall/chicago-food-inspections/blob/main/Output/resultsofinspection.png)

**Counts of Risk Type** <br />
Risk category of facility: Each establishment is categorized as to its risk of adversely affecting the public’s health, with 1 being the highest and 3 the lowest. The frequency of inspection is tied to this risk, with risk 1 establishments inspected most frequently and risk 3 least frequently.


![My_Image](https://github.com/flindwall/chicago-food-inspections/blob/main/Output/Risk1Passes.png) 
![My_Image](https://github.com/flindwall/chicago-food-inspections/blob/main/Output/Risk2Passes.png) 
![My_Image](https://github.com/flindwall/chicago-food-inspections/blob/main/Output/Risk3Passes.png)

![My_Image](https://github.com/flindwall/chicago-food-inspections/blob/main/Output/CountofRiskType.png)

**Results by Inspection by Year** <br />
Note about 7/1/2018 change to food inspection procedures that affects the data in this dataset: [Click Here to Learn More](http://bit.ly/2yWd2JB)
![My_Image](https://github.com/flindwall/chicago-food-inspections/blob/main/Output/ResultsByYear.png)

# Results
## Demo (need to update with our map)

[Click Here](http://127.0.0.1:5501/chicago-food-inspections/index.html) 

![App Screenshot](https://raw.githubusercontent.com/gnimeth/Earthquake_data/main/Output/Screenshot_20230212_063133.png)

## Resources
- City of Chicago. (2023). Food Inspections. data.cityofchicago.org. https://data.cityofchicago.org/Health-Human-Services/Food-Inspections/4ijn-s7e5

- City of Chicago. (2023). Understand Health Code Requirements for Food Establishments. www.chicago.gov. https://www.chicago.gov/city/en/depts/cdph/provdrs/healthy_restaurants/svcs/understand_healthcoderequirementsforfoodestablishments.html
