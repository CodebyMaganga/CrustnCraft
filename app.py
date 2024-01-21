from flask import Flask, make_response, jsonify, request
from flask_migrate import Migrate
from models import db, Restaurant,Pizza, restaurant_pizza

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

migrate = Migrate(app,db)

db.init_app(app)

@app.route('/')
def index():
    return "code check one two"

@app.route('/restaurants')
def get_restaurants():
    restaurants = [restaurant.to_dict() for restaurant in Restaurant.query.all()]

    response = make_response(jsonify(restaurants), 200)

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
             

@app.route('/pizzas')
def all_pizzas():
    pizza = [pizza.to_dict() for pizza in Pizza.query.all()]

    response=make_response(jsonify(pizza), 200)

    return response

@app.route('/restaurant_pizzas', methods=['POST'])
def create_pizzeria():
    data = request.get_json()

    new_item = restaurant_pizza.insert().values(
        restaurant_id=data['restaurant_id'],
        pizza_id=data['pizza_id'],
        price=data['price']
    )

    db.session.add(new_item)
    db.session.commit()

    new_pizza = Pizza.query.filter_by(id=data['pizza_id']).first()

    if new_pizza:
        pizza_info={
            "id": new_pizza.id,
            'name': new_pizza.name ,
            'ingredients': new_pizza.ingredients
        }

        return jsonify(pizza_info)
    
    return jsonify({ "errors": ["validation errors"]}), 403

    


    



if __name__ == "__main__":
    app.run(debug=True, port=5555)
