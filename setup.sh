echo "Starting AfricaExpress setup..."

# Install PHP dependencies
echo "Installing PHP dependencies..."
composer install

# Install JavaScript dependencies
echo "Installing JavaScript dependencies..."
npm install

# Set up environment variables
echo "Setting up environment variables..."
cp .env.example .env
php artisan key:generate

# Migrate the database
echo "Migrating the database..."
php artisan migrate

# Compile frontend assets
echo "Compiling frontend assets..."
npm run dev

echo "Setup completed successfully!"
echo "Starting Laravel development server..."

# Start the Laravel development server
php artisan serve --host=localhost --port=8000
