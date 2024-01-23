from flask import Flask, make_response, jsonify, request
from flask_restful import Resource, Api
from flask_migrate import Migrate
from models import db, Restaurant,Pizza, restaurant_pizza
from flask_cors import CORS


app = Flask(__name__)
CORS(app)


app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

migrate = Migrate(app,db)

api= Api(app)
db.init_app(app)



@app.route('/')
def index():
    return "code check one two"

@app.route('/restaurants')
def get_restaurants():
    restaurants =  Restaurant.query.all()
    restaurant_lists = []

    for restaurant in restaurants:
        restaurant_dict={
            "name": restaurant.name,
            "address": restaurant.address,
            "pizzas":[{"id": pizza.id, "name": pizza.name, "ingredients":pizza.ingredients}
            for pizza in restaurant.pizzas]
        }
        restaurant_lists.append(restaurant_dict)

    response = make_response(jsonify(restaurant_lists), 200)

    return response

@app.route('/restaurants/<int:id>', methods=['GET','DELETE'])
def get_restaurant(id):
        restaurant =  Restaurant.query.get(id).to_dict()

        if not restaurant:
            return jsonify({"message": "Item not found"})
        
        
        if request.method == 'GET':
            response = make_response(jsonify(restaurant), 200)

            return response
        
        elif request.method == 'DELETE':
            del_restaurant =  Restaurant.query.get(id)
            db.session.delete(del_restaurant)
            db.session.commit()

            return jsonify({"message": "item deleted succesfully"})
             
"""
@app.route('/pizzas')
def all_pizzas():
    pizza = [pizza.to_dict() for pizza in Pizza.query.all()]

    response=make_response(jsonify(pizza), 200)

    return response
"""
class GetPizzas(Resource):
    def get(self):
        pizzas = Pizza.query.all()
        pizza_list = []
        for pizza in pizzas:
            pizza_dict = {
                'id': pizza.id,
                'name': pizza.name,
                'ingredients': pizza.ingredients,
                'restaurant_id': pizza.restaurant_id,
            }
            pizza_list.append(pizza_dict)
        response = make_response(jsonify(pizza_list), 200)
        return response

api.add_resource(GetPizzas, '/pizzas')



@app.route('/restaurant_pizzas', methods=['POST'])
def create_pizzeria():
    data = request.get_json()

    new_item = restaurant_pizza.insert().values(
    restaurant_id=data['restaurant_id'],
    pizza_id=data['pizza_id'],
    Price=data['Price']
    )


    db.session.execute(new_item)
    db.session.commit()

    
     
    return jsonify({"message": "Item added succesfully"})


   

        
if __name__ == "__main__":
    app.run(debug=True, port=5555)
