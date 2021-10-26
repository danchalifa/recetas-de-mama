import sqlite3
import pandas as pd
import json
import math


con = sqlite3.connect('../db/RecipesDB_v5.db')
cur = con.cursor()
df = pd.read_sql_query("SELECT * FROM RECIPES_FULL", con)


df.to_csv("recipies.csv", encoding='utf-8', index=False)