{
	"info": {
		"_postman_id": "2ca93bce-d369-4851-84ba-61cfe69c37b3",
		"name": "todo",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "9418252"
	},
	"item": [
		{
			"name": "post new todo",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "urlencoded",
					"urlencoded": [
						{
							"key": "todo",
							"value": "work on the test project",
							"type": "text"
						},
						{
							"key": "date",
							"value": "12/19/2023",
							"type": "text"
						}
					]
				},
				"url": {
					"raw": "http://localhost:3000/api/todo/new/:uid",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"todo",
						"new",
						":uid"
					],
					"variable": [
						{
							"key": "uid",
							"value": "6581b0310c119ed079f27fc9"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "seed new todos",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "urlencoded",
					"urlencoded": [
						{
							"key": "todo",
							"value": "work on the test project",
							"type": "text"
						},
						{
							"key": "date",
							"value": "12/19/2023",
							"type": "text"
						}
					]
				},
				"url": {
					"raw": "http://localhost:3000/api/todo/seeds/:userId/:recCount",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"todo",
						"seeds",
						":userId",
						":recCount"
					],
					"variable": [
						{
							"key": "userId",
							"value": "6581b0310c119ed079f27fc9"
						},
						{
							"key": "recCount",
							"value": "2"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "Update existing todo",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "urlencoded",
					"urlencoded": [
						{
							"key": "todo",
							"value": "work on the test project (updated)",
							"type": "text"
						},
						{
							"key": "date",
							"value": "12/19/2024",
							"type": "text"
						}
					]
				},
				"url": {
					"raw": "http://localhost:3000/api/todo/update/:recId",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"todo",
						"update",
						":recId"
					],
					"variable": [
						{
							"key": "recId",
							"value": "6581b96538215b7410543d88"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "delete todo",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "urlencoded",
					"urlencoded": []
				},
				"url": {
					"raw": "http://localhost:3000/api/todo/delete/:recId",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"todo",
						"delete",
						":recId"
					],
					"variable": [
						{
							"key": "recId",
							"value": "6581b96538215b7410543d88"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "Get all todo or specific todo",
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [],
				"body": {
					"mode": "urlencoded",
					"urlencoded": []
				},
				"url": {
					"raw": "http://localhost:3000/api/todo/:uid/",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"todo",
						":uid",
						""
					],
					"query": [
						{
							"key": "todo",
							"value": "6581b9242669616fee59e667",
							"disabled": true
						}
					],
					"variable": [
						{
							"key": "uid",
							"value": "6581b0310c119ed079f27fc9"
						}
					]
				},
				"description": "StartFragment// The route is user to get all todos or a specific todo if the todo id is provided in the query string EndFragment"
			},
			"response": []
		},
		{
			"name": "get all todos",
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [],
				"body": {
					"mode": "urlencoded",
					"urlencoded": []
				},
				"url": {
					"raw": "http://localhost:3000/api/todo/",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"todo",
						""
					]
				},
				"description": "StartFragment// The route is user to get all todos or a specific todo if the todo id is provided in the query string EndFragment"
			},
			"response": []
		}
	]
}