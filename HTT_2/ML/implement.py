def map_list_to_range(values, value_min, value_max, target_min=0, target_max=179):
    percentages = [(value - value_min) / (value_max - value_min) for value in values]
    
    mapped_values = [int(percentage * (target_max - target_min) + target_min) for percentage in percentages]
    
    return mapped_values



import pickle

import os

os.environ['TF_ENABLE_ONEDNN_OPTS'] = '0'
import csv
import keras
import numpy as np
import tensorflow as tf
from tensorflow import keras
from recsys_utils import *


with open('weights.pkl', 'rb') as f:
    W2 = pickle.load(f)
with open('biases.pkl', 'rb') as f:
    b2 = pickle.load(f)
with open('movies.pkl', 'rb') as f:
    X2 = pickle.load(f)

print(len(X2[10]))
print(len(W2[0]))
print(len(b2[:,0]))
user0=((np.matmul(X2,W2[0])+b2[:,0]))
print(user0)
abc=(sorted(zip(user0,range(len(user0))),reverse=True))
indices=([a[1] for a in abc])
print("Recommended Courses ::")
print(map_list_to_range(indices,0,4777,target_min=0, target_max=179)[0:10])
