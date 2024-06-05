# Use the official Node.js image as the base  
FROM node:20-alpine


#copy source 
COPY . /app

# Install deps 
RUN cd /app &&  npm install 

# Build 
RUN npm run build

ENTRYPOINT [ "npm", "run", "start" ]
EXPOSE 3000  

# Start the app  
CMD ["npm", "start"]