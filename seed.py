from models import db, Restaurant, restaurant_pizza, Pizza
from random import choice as rc
from faker import Faker
from app import app
import random



fake = Faker()

with app.app_context():

    Restaurant.query.delete()
    Pizza.query.delete()
    db.session.commit()

    restaurants = []
    pizzas = []

    for _ in range(5):
        restaurant= Restaurant(name=fake.name(), address=fake.address(),)
        restaurants.append(restaurant)
    
    
    
    db.session.add_all(restaurants)
    db.session.commit()

    ingredients = [
        "Pizza dough",
        "Tomato sauce",
        "Mozzarella cheese",
        "Fresh basil leaves",
        "Salt",
        "Pepper",
        "Pepperoni",
        "Mushrooms",
        "Onions",
        "Bell peppers",
        "Sausage",
        "Olives",
        "Garlic",
        "Anchovies",
        "Pineapple",
        "Ham",
        "Spinach",
        "Feta cheese",
        "Chicken",
        "Sun-dried tomatoes",
        "Bacon",
        "Artichoke hearts",
        "Tomatoes",
        "Provolone cheese",
        "Parmesan cheese",
        "Red pepper flakes",
        "Fresh oregano",
        "Pesto sauce",
        "Ricotta cheese",
        "Goat cheese",
        "Blue cheese",
        "Arugula",
        "Eggplant",
        "Zucchini",
        "BBQ sauce"
    ]
    for restaurant in restaurants:
        for _ in range(3):
            random_restaurant=rc(restaurants)
            pizza_name = fake.name()
            pizza_ingredients = random.sample(ingredients, 4)
            pizza = Pizza(name=pizza_name, ingredients=", ".join(pizza_ingredients))
            pizzas.append(pizza)
            random_pizza = rc(pizzas)
            restaurant_pizza_table = {'restaurant_id': random_restaurant.id, 'pizza_id':random_pizza.id, 'Price': rc(range(1,31))}
            db.session.execute(restaurant_pizza.insert().values(restaurant_pizza_table))
        
        
    
        
    db.session.commit()
                          
    
    db.session.add_all(pizzas)

    db.session.commit()
