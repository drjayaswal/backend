FROM python:3.9-slim

WORKDIR /app

RUN echo "Acquire::http::Pipeline-Depth 0; Acquire::http::No-Cache true; Acquire::BrokenProxy true;" > /etc/apt/apt.conf.d/99fixbadproxy

RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    gcc \
    default-libmysqlclient-dev \
    pkg-config \
    python3-dev && \
    rm -rf /var/lib/apt/lists/*

COPY requirements.txt .

RUN pip install mysqlclient
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

CMD ["python", "app.py"]
