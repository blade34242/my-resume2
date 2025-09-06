FROM node:22-alpine

# Create app directory and set permissions for non-root user
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app

# Default configuration
ENV NODE_ENV=production \
    example=2

# Install dependencies (use clean, reproducible install and omit dev deps)
COPY --chown=node:node package*.json ./
USER node
RUN npm ci --omit=dev

# Copy application source
COPY --chown=node:node . .

# Expose default port (app still respects PORT env)
EXPOSE 5555

CMD [ "node", "app.js" ]
