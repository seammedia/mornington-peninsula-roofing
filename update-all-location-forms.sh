#!/bin/bash

# Full dropdown HTML for locations
FULL_DROPDOWN='          <a role="menuitem" class="dropdown-link" href="/locations/mount-eliza.html">Mount Eliza</a>
          <a role="menuitem" class="dropdown-link" href="/locations/mornington.html">Mornington</a>
          <a role="menuitem" class="dropdown-link" href="/locations/frankston.html">Frankston</a>
          <a role="menuitem" class="dropdown-link" href="/locations/sorrento.html">Sorrento</a>
          <a role="menuitem" class="dropdown-link" href="/locations/rosebud.html">Rosebud</a>
          <a role="menuitem" class="dropdown-link" href="/locations/carrum.html">Carrum</a>
          <a role="menuitem" class="dropdown-link" href="/locations/carrum-downs.html">Carrum Downs</a>
          <a role="menuitem" class="dropdown-link" href="/locations/seaford.html">Seaford</a>
          <a role="menuitem" class="dropdown-link" href="/locations/mount-martha.html">Mount Martha</a>
          <a role="menuitem" class="dropdown-link" href="/locations/cranbourne.html">Cranbourne</a>
          <a role="menuitem" class="dropdown-link" href="/locations/flinders.html">Flinders</a>
          <a role="menuitem" class="dropdown-link" href="/locations/dromana.html">Dromana</a>
          <a role="menuitem" class="dropdown-link" href="/locations/hampton.html">Hampton</a>'

# Full footer HTML for locations
FULL_FOOTER='                    <li><a href="/locations/mount-eliza.html">Mount Eliza</a></li>
                    <li><a href="/locations/mornington.html">Mornington</a></li>
                    <li><a href="/locations/frankston.html">Frankston</a></li>
                    <li><a href="/locations/sorrento.html">Sorrento</a></li>
                    <li><a href="/locations/rosebud.html">Rosebud</a></li>
                    <li><a href="/locations/carrum.html">Carrum</a></li>
                    <li><a href="/locations/carrum-downs.html">Carrum Downs</a></li>
                    <li><a href="/locations/seaford.html">Seaford</a></li>
                    <li><a href="/locations/mount-martha.html">Mount Martha</a></li>
                    <li><a href="/locations/cranbourne.html">Cranbourne</a></li>
                    <li><a href="/locations/flinders.html">Flinders</a></li>
                    <li><a href="/locations/dromana.html">Dromana</a></li>
                    <li><a href="/locations/hampton.html">Hampton</a></li>'

# Original short dropdown HTML
OLD_DROPDOWN='          <a role="menuitem" class="dropdown-link" href="/locations/mount-eliza.html">Mount Eliza</a>
          <a role="menuitem" class="dropdown-link" href="/locations/mornington.html">Mornington</a>
          <a role="menuitem" class="dropdown-link" href="/locations/frankston.html">Frankston</a>
          <a role="menuitem" class="dropdown-link" href="/locations/sorrento.html">Sorrento</a>'

# Original short footer HTML
OLD_FOOTER='                    <li><a href="/locations/mount-eliza.html">Mount Eliza</a></li>
                    <li><a href="/locations/mornington.html">Mornington</a></li>
                    <li><a href="/locations/frankston.html">Frankston</a></li>
                    <li><a href="/locations/sorrento.html">Sorrento</a></li>'

# Update all location files
for file in /Users/heathmaes/mornington-peninsula-roofing/locations/*.html; do
    echo "Updating $file..."
    
    # Create temporary file for sed operations
    temp_file=$(mktemp)
    
    # Copy original file to temp
    cp "$file" "$temp_file"
    
    # Replace dropdown content (using perl for better multiline matching)
    perl -i -pe '
        BEGIN { undef $/; }
        s|\Q'"$OLD_DROPDOWN"'\E|'"$FULL_DROPDOWN"'|gs
    ' "$temp_file"
    
    # Replace footer content (using perl for better multiline matching)
    perl -i -pe '
        BEGIN { undef $/; }
        s|\Q'"$OLD_FOOTER"'\E|'"$FULL_FOOTER"'|gs
    ' "$temp_file"
    
    # Copy back from temp to original
    cp "$temp_file" "$file"
    rm "$temp_file"
    
    echo "Updated $file"
done

echo "All location pages updated successfully!"