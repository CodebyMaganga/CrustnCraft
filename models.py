from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy import CheckConstraint

db = SQLAlchemy()

restaurant_pizza = db.Table(
    'restaurant_pizza',
    db.Column('restaurant_id', db.Integer, db.ForeignKey('restaurants.id')),
    db.Column('pizza_id', db.Integer, db.ForeignKey('pizzas.id')),
    db.Column('Price', db.Integer, CheckConstraint('Price > 0 AND Price <= 30'))
)

class Restaurant(db.Model, SerializerMixin):
    __tablename__ = 'restaurants'


    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    address = db.Column(db.String)
    pizzas = db.relationship('Pizza', secondary=restaurant_pizza, backref='restaurant')

    def __repr__(self):
        return f"<{self.name}: {self.address}>"
    
    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "address": self.address,
            "pizzas": [pizza.to_dict() for pizza in self.pizzas]
        }

class Pizza(db.Model, SerializerMixin):
    __tablename__ = 'pizzas'

    

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    ingredients = db.Column(db.String)
    restaurant_id = db.Column(db.Integer, db.ForeignKey('restaurants.id'))


    def __repr__(self):
        return f"<{self.name}: {self.ingredients}>"
