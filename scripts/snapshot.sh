echo "📦 Running Directus auto snapshot..."

npx directus schema snapshot /directus/snapshots/schema.yaml

echo "✅ Snapshot saved!"

npx directus start