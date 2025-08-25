#!/bin/bash

# Find all HTML files and update footer-links class for locations to include loc-columns
echo "Adding loc-columns class to footer locations lists..."

# Function to update a single file
update_file() {
    local file="$1"
    echo "Updating $file..."
    
    # Create temporary file for sed operations
    temp_file=$(mktemp)
    
    # Copy original file to temp
    cp "$file" "$temp_file"
    
    # Look for the locations section in footer and update the ul class
    # This targets the locations section specifically and adds loc-columns to footer-links
    perl -i -pe '
        if (/<div class="footer-section"[^>]*id="locations"/) {
            $in_locations_section = 1;
        }
        if ($in_locations_section && /<ul class="footer-links">/) {
            s/<ul class="footer-links">/<ul class="footer-links loc-columns">/g;
            $in_locations_section = 0;
        }
        if (/<\/div>/ && $in_locations_section) {
            $in_locations_section = 0;
        }
    ' "$temp_file"
    
    # Copy back from temp to original
    cp "$temp_file" "$file"
    rm "$temp_file"
    
    echo "Updated $file"
}

# Update main pages
for file in index.html about.html contact.html; do
    if [ -f "/Users/heathmaes/mornington-peninsula-roofing/$file" ]; then
        update_file "/Users/heathmaes/mornington-peninsula-roofing/$file"
    fi
done

# Update location pages
for file in /Users/heathmaes/mornington-peninsula-roofing/locations/*.html; do
    if [ -f "$file" ]; then
        update_file "$file"
    fi
done

# Update blog pages that have location footers
for file in /Users/heathmaes/mornington-peninsula-roofing/blog/*.html; do
    if [ -f "$file" ] && grep -q 'id="locations"' "$file"; then
        update_file "$file"
    fi
done

echo "All footer locations lists updated with loc-columns class!"