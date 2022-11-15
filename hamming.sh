#!/bin/bash

## https://exercism.org/tracks/javascript/exercises/hamming

hammDistance() {
    local dna1="$1"
    local dna2="$2"
    count=0

    length1=$(echo $dna1 | wc -c)
    length2=$(echo $dna2 | wc -c)

    if [ $length1 -ne $length2 ]; then
      echo "Length of dna 1 and dna 2 are not equal"
      exit 1 
    fi

    toList() {
        word="$1"
        while [ -n "$word" ]; do
          echo "$word" | cut -c 1
          word=$(echo "$word" | cut -c 2-)
        done
    }

    dna1List=($(toList "$dna1"))
    dna2List=($(toList "$dna2"))

    for ((i=0; i <= $length1; i++)); do
      if [ "${dna1List[i]}" != "${dna2List[i]}" ]; then
        ((count++))
      fi 
    done
}

hammDistance GAGCCTACTAACGGGAT CATCGTAATGACGGCCT
echo "Difference: $count"