
from http.server import BaseHTTPRequestHandler, HTTPServer
import json
import subprocess

# Define the host and port
HOST = 'localhost'
PORT = 6969

# Function that processes the input data
def process_data(input_data):
    # Example function that reverses the input string
    command = "llm -m orca-mini-3b-gguf2-q4_0 \""+ input_data + "\""
    result = subprocess.run(command, shell=False, capture_output=True, text=True)
    return result.stdout

class MyRequestHandler(BaseHTTPRequestHandler):
    
    def do_OPTIONS(self):
        # Handling CORS preflight request
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()

    def do_POST(self):
        # Get content length to read the data
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)

        # Parse the received data
        received_data = json.loads(post_data)
        input_data = received_data.get('input_string', '')

        # Process the data using the function
        result = process_data(input_data)

        # Prepare the response
        response = {'result': result}
        response_json = json.dumps(response)

        # Send response status
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')  # Allow CORS
        self.end_headers()
        # Send the response body
        self.wfile.write(response_json.encode('utf-8'))

if __name__ == "__main__":
    # Create the server
    server = HTTPServer((HOST, PORT), MyRequestHandler)
    print(f"Server running on http://{HOST}:{PORT}")
    server.serve_forever()

