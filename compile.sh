#!/bin/bash
# Prerequisite stuff
current_path=$(pwd)
jsx_files=()
# Finding `.jsx` and `.css` files
while IFS= read -r file; do
    jsx_files+=("$file")
done < <(find "${current_path}/src" -type f \( -name "*.jsx" -o -name "*.css" \))
mkdir -p "${current_path}/Build/"
# Writing the content of `.jsx` and `.css` files to `Build` directory
for file_path in "${jsx_files[@]}"; do
    file_name=$(basename "$file_path")
    cat "$file_path" > "${current_path}/Build/$file_name"
done
