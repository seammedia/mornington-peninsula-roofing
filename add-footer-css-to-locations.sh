#!/bin/bash

# Add footer two-column CSS to all location pages
echo "Adding footer two-column CSS to location pages..."

# CSS to add
CSS_TO_ADD='
    /* Two-column layout for locations list in footer */
    .footer-links.loc-columns {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .footer-links.loc-columns li {
        margin-bottom: 8px;
        break-inside: avoid;
    }

    @media (min-width: 768px) {
        .footer-links.loc-columns {
            columns: 2;
            column-gap: 24px;
        }
    }

    @media (max-width: 767px) {
        .footer-links.loc-columns {
            columns: 1;
        }
    }'

# Function to update a single location file
update_location_file() {
    local file="$1"
    echo "Adding CSS to $file..."
    
    # Create temporary file for sed operations
    temp_file=$(mktemp)
    
    # Copy original file to temp
    cp "$file" "$temp_file"
    
    # Find the line with the closing media query for footer and add our CSS before </style>
    # Look for the pattern with @media (max-width: 768px) followed by footer-content, then add our CSS before </style>
    perl -i -pe '
        if (/^\s*\}\s*$/ && $seen_footer_media) {
            $seen_footer_media = 0;
            $_ .= "\n'"$CSS_TO_ADD"'\n";
        }
        if (/@media \(max-width: 768px\)/ && /footer-content/ .. /^\s*\}\s*$/) {
            if (/^\s*\}\s*$/) {
                $seen_footer_media = 1;
            }
        }
    ' "$temp_file"
    
    # If the above didn'\''t work, try a simpler approach - just add before </style>
    if ! grep -q "loc-columns" "$temp_file"; then
        perl -i -pe '
            if (/^\s*<\/style>\s*$/) {
                $_ = "'"$CSS_TO_ADD"'\n" . $_;
            }
        ' "$temp_file"
    fi
    
    # Copy back from temp to original
    cp "$temp_file" "$file"
    rm "$temp_file"
    
    echo "Added CSS to $file"
}

# Update all location files
for file in /Users/heathmaes/mornington-peninsula-roofing/locations/*.html; do
    if [ -f "$file" ]; then
        update_location_file "$file"
    fi
done

echo "Footer two-column CSS added to all location pages!"