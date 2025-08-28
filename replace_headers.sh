#!/bin/bash

# Script to replace old headers with new shared header across all HTML files
# Path to project root
PROJECT_ROOT="/Users/heathmaes/mornington-peninsula-roofing"

# Header content
NEW_HEADER='<!-- Shared Header -->
<link rel="preload" href="/assets/fonts/Peace Sans Webfont.ttf" as="font" type="font/ttf" crossorigin>
<link rel="stylesheet" href="/assets/css/header.css">

<header class="mpr-header mpr-reset" role="banner">
  <nav class="mpr-nav" aria-label="Main navigation">
    <!-- Brand -->
    <a class="mpr-brand" href="/index.html" aria-label="Mornington Peninsula Roofing">
      <span class="mpr-logo">MP</span>
      <span class="mpr-brand-title">
        <span class="mpr-sub">The Roofing Specialists</span>
        <span class="mpr-main">Mornington Peninsula Roofing</span>
      </span>
    </a>

    <!-- Desktop links -->
    <div class="mpr-links" aria-label="Primary">
      <a class="mpr-link" href="/index.html" data-nav="/">Home</a>
      <a class="mpr-link" href="/about.html" data-nav="/about.html">About</a>

      <div class="mpr-dropdown" aria-haspopup="true">
        <button class="mpr-drop-toggle" aria-expanded="false">Services ▾</button>
        <div class="mpr-drop-menu" role="menu">
          <a class="mpr-drop-link" href="/services/roof-repairs.html" data-nav="/services/roof-repairs.html">Roof Repairs</a>
          <a class="mpr-drop-link" href="/services/roof-restoration.html" data-nav="/services/roof-restoration.html">Roof Restoration</a>
          <a class="mpr-drop-link" href="/services/re-roofing.html" data-nav="/services/re-roofing.html">Re-Roofing</a>
          <a class="mpr-drop-link" href="/services/roof-painting.html" data-nav="/services/roof-painting.html">Roof Painting</a>
          <a class="mpr-drop-link" href="/services/emergency-roof-repairs.html" data-nav="/services/emergency-roof-repairs.html">Emergency Repairs</a>
        </div>
      </div>

      <div class="mpr-dropdown" aria-haspopup="true">
        <button class="mpr-drop-toggle" aria-expanded="false">Locations ▾</button>
        <div class="mpr-drop-menu" role="menu">
          <a class="mpr-drop-link" href="/locations/mount-eliza.html" data-nav="/locations/mount-eliza.html">Mount Eliza</a>
          <a class="mpr-drop-link" href="/locations/mornington.html" data-nav="/locations/mornington.html">Mornington</a>
          <a class="mpr-drop-link" href="/locations/frankston.html" data-nav="/locations/frankston.html">Frankston</a>
          <a class="mpr-drop-link" href="/locations/sorrento.html" data-nav="/locations/sorrento.html">Sorrento</a>
          <a class="mpr-drop-link" href="/locations/rosebud.html" data-nav="/locations/rosebud.html">Rosebud</a>
          <a class="mpr-drop-link" href="/locations/carrum.html" data-nav="/locations/carrum.html">Carrum</a>
          <a class="mpr-drop-link" href="/locations/carrum-downs.html" data-nav="/locations/carrum-downs.html">Carrum Downs</a>
          <a class="mpr-drop-link" href="/locations/seaford.html" data-nav="/locations/seaford.html">Seaford</a>
          <a class="mpr-drop-link" href="/locations/mount-martha.html" data-nav="/locations/mount-martha.html">Mount Martha</a>
          <a class="mpr-drop-link" href="/locations/cranbourne.html" data-nav="/locations/cranbourne.html">Cranbourne</a>
          <a class="mpr-drop-link" href="/locations/flinders.html" data-nav="/locations/flinders.html">Flinders</a>
          <a class="mpr-drop-link" href="/locations/dromana.html" data-nav="/locations/dromana.html">Dromana</a>
          <a class="mpr-drop-link" href="/locations/hampton.html" data-nav="/locations/hampton.html">Hampton</a>
        </div>
      </div>

      <a class="mpr-link" href="/blog/" data-nav="/blog/">Blog</a>
      <a class="mpr-link" href="/contact.html" data-nav="/contact.html">Contact</a>
    </div>

    <!-- Desktop right -->
    <div class="mpr-right">
      <a class="mpr-phone" href="tel:+61341627766">03 4162 7766</a>
      <a class="mpr-cta" href="/contact.html">Get Quote</a>
    </div>

    <!-- Mobile hamburger -->
    <button id="mpr-open" class="mpr-hamburger" aria-label="Open menu" aria-controls="mpr-drawer">
      <svg viewBox="0 0 24 24" fill="none"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
    </button>
  </nav>
</header>

<!-- Off-canvas + Overlay -->
<div class="mpr-overlay" tabindex="-1" aria-hidden="true"></div>

<aside id="mpr-drawer" class="mpr-drawer" aria-hidden="true" aria-label="Mobile menu" role="dialog">
  <div class="mpr-drawer-head">
    <div class="mpr-brand-title">
      <span class="mpr-sub">The Roofing Specialists</span>
      <span class="mpr-main" style="font-family:'"'"'Peace Sans'"'"','"'"'Peace Sans Webfont'"'"',impact,sans-serif;">Mornington Peninsula Roofing</span>
    </div>
    <button id="mpr-close" class="mpr-close" aria-label="Close menu">
      <svg viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18"/></svg>
    </button>
  </div>

  <nav class="mpr-drawer-nav">
    <a class="mpr-drawer-link" href="/index.html" data-nav="/">Home</a>
    <a class="mpr-drawer-link" href="/about.html" data-nav="/about.html">About</a>

    <!-- Services accordion -->
    <div class="mpr-drawer-accordion">
      <button class="mpr-drawer-accordion-btn" aria-expanded="false">Services</button>
      <div class="mpr-acc-panel">
        <a class="mpr-acc-link" href="/services/roof-repairs.html" data-nav="/services/roof-repairs.html">Roof Repairs</a>
        <a class="mpr-acc-link" href="/services/roof-restoration.html" data-nav="/services/roof-restoration.html">Roof Restoration</a>
        <a class="mpr-acc-link" href="/services/re-roofing.html" data-nav="/services/re-roofing.html">Re-Roofing</a>
        <a class="mpr-acc-link" href="/services/roof-painting.html" data-nav="/services/roof-painting.html">Roof Painting</a>
        <a class="mpr-acc-link" href="/services/emergency-roof-repairs.html" data-nav="/services/emergency-roof-repairs.html">Emergency Repairs</a>
      </div>
    </div>

    <!-- Locations accordion -->
    <div class="mpr-drawer-accordion">
      <button class="mpr-drawer-accordion-btn" aria-expanded="false">Locations</button>
      <div class="mpr-acc-panel">
        <a class="mpr-acc-link" href="/locations/mount-eliza.html" data-nav="/locations/mount-eliza.html">Mount Eliza</a>
        <a class="mpr-acc-link" href="/locations/mornington.html" data-nav="/locations/mornington.html">Mornington</a>
        <a class="mpr-acc-link" href="/locations/frankston.html" data-nav="/locations/frankston.html">Frankston</a>
        <a class="mpr-acc-link" href="/locations/sorrento.html" data-nav="/locations/sorrento.html">Sorrento</a>
        <a class="mpr-acc-link" href="/locations/rosebud.html" data-nav="/locations/rosebud.html">Rosebud</a>
        <a class="mpr-acc-link" href="/locations/carrum.html" data-nav="/locations/carrum.html">Carrum</a>
        <a class="mpr-acc-link" href="/locations/carrum-downs.html" data-nav="/locations/carrum-downs.html">Carrum Downs</a>
        <a class="mpr-acc-link" href="/locations/seaford.html" data-nav="/locations/seaford.html">Seaford</a>
        <a class="mpr-acc-link" href="/locations/mount-martha.html" data-nav="/locations/mount-martha.html">Mount Martha</a>
        <a class="mpr-acc-link" href="/locations/cranbourne.html" data-nav="/locations/cranbourne.html">Cranbourne</a>
        <a class="mpr-acc-link" href="/locations/flinders.html" data-nav="/locations/flinders.html">Flinders</a>
        <a class="mpr-acc-link" href="/locations/dromana.html" data-nav="/locations/dromana.html">Dromana</a>
        <a class="mpr-acc-link" href="/locations/hampton.html" data-nav="/locations/hampton.html">Hampton</a>
      </div>
    </div>

    <a class="mpr-drawer-link" href="/blog/" data-nav="/blog/">Blog</a>
    <a class="mpr-drawer-link" href="/contact.html" data-nav="/contact.html">Contact</a>
  </nav>

  <div class="mpr-drawer-foot">
    <a class="mpr-drawer-phone" href="tel:+61341627766">03 4162 7766</a>
    <a class="mpr-drawer-cta" href="/contact.html">Get Quote</a>
  </div>
</aside>

<script defer src="/assets/js/header.js"></script>'

echo "Starting header replacement process..."

# Files to process (excluding ones already done: index.html, about.html, contact.html)
files_to_process=(
    "blog/index.html"
    "blog/carport-roofing-mornington-peninsula.html"
    "blog/colorbond-or-roof-tiles.html"
    "blog/colorbond-roof-painting-melbourne.html"
    "blog/colorbond-roofing-frankston.html"
    "blog/gazebo-roofing-mornington-peninsula.html"
    "blog/metal-roofing-frankston.html"
    "blog/metal-roofing-mornington.html"
    "blog/patio-roof-installation-mornington-peninsula.html"
    "blog/roof-painting-mornington-peninsula.html"
    "blog/roof-repairs-chelsea.html"
    "blog/roof-repairs-mornington-peninsula.html"
    "blog/roof-replacement-cost-calculator-australia.html"
    "blog/roof-replacement-mornington.html"
    "blog/roofing-contractors-mornington-peninsula.html"
    "blog/roofing-cranbourne.html"
    "blog/roofing-repairs-mornington-peninsula.html"
    "locations/carrum.html"
    "locations/carrum-downs.html"
    "locations/cranbourne.html"
    "locations/dromana.html"
    "locations/flinders.html"
    "locations/frankston.html"
    "locations/hampton.html"
    "locations/mornington.html"
    "locations/mount-eliza.html"
    "locations/mount-martha.html"
    "locations/rosebud.html"
    "locations/seaford.html"
    "locations/sorrento.html"
    "services/emergency-roof-repairs.html"
    "services/re-roofing.html"
    "services/roof-painting.html"
    "services/roof-repairs.html"
    "services/roof-restoration.html"
)

processed_count=0
error_count=0

for file in "${files_to_process[@]}"; do
    full_path="$PROJECT_ROOT/$file"
    
    if [ -f "$full_path" ]; then
        echo "Processing $file..."
        
        # Create backup
        cp "$full_path" "$full_path.backup"
        
        # Use Python to handle the replacement because the headers vary
        python3 << EOF
import re
import sys

file_path = "$full_path"
new_header = """$NEW_HEADER"""

try:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Pattern to match from <header class="site-header"> to </header>
    pattern = r'<header class="site-header">.*?</header>'
    
    # Replace the header
    updated_content = re.sub(pattern, new_header, content, flags=re.DOTALL)
    
    if updated_content != content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(updated_content)
        print(f"✓ Updated {file_path}")
    else:
        print(f"⚠ No header found in {file_path}")
        
except Exception as e:
    print(f"✗ Error processing {file_path}: {e}")
    sys.exit(1)
EOF
        
        if [ $? -eq 0 ]; then
            ((processed_count++))
        else
            ((error_count++))
        fi
        
    else
        echo "⚠ File not found: $full_path"
        ((error_count++))
    fi
done

echo "Header replacement completed!"
echo "Successfully processed: $processed_count files"
echo "Errors: $error_count files"