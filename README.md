## File Upload Vulnerability Source 


The vulnerable source code uses express-fileupload and fs
express-fileupload handles the filename and removes any "." or "/" from the filename 
but the vulnerable code also asks for a folder to put the file in 


An attacker can possibly inject "../../" in the folder parameter leading to unable him to place his file wherever he wants
in the Server 

Attack Surface :

1) An attacker replace the /root/.ssh/authorized_keys directory with his public key allowing him ssh access 
2) Internal files can be manipulated leading to abnormal behvaiour 



Try it yourself :


Run the express server 
node index.js 

Local server will start on port 8000
By default we are storing file in the /public subfolder 


Upload a file in folder name type "../" 
Now your file will be placed along side "index.js"

