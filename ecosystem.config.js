module.exports = {
    apps : [
		{
			name: "strapi-app",
			script: "NODE_ENV=production npm start",
			watch: true,
			env : {
				"NODE_ENV": "development",
			},
			env_staging: {
				"PORT": 5000,
				"NODE_ENV": "staging"
			},
			env_production: {
				"PORT": 80,
				"NODE_ENV": "production",
			}            
		}
    ]
}
  

