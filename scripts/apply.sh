#!/bin/sh

echo "⚠️ Applying schema..."

npx directus schema apply /directus/snapshots/schema.yaml

echo "✅ Schema applied"