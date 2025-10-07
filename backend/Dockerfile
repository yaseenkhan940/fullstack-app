# Step 1: Use the official Python image
FROM python:3.10-slim

# Step 2: Set working directory inside container
WORKDIR /app

# Step 3: Copy all files from backend to /app
COPY . .

# Step 4: Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Step 5: Expose the port FastAPI runs on
EXPOSE 8000

# Step 6: Command to start the server
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
