-- SQL Script to Insert Data into Existing Table `tsb_recipes` with Auto-Increment Id

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

-- Inserting data into table `apprecipes` without specifying Id (auto-increment)


INSERT INTO `tsb_recipes` (`Name`, `Description`) VALUES
('Pasta', 'Pasta is a classic Italian dish made from wheat flour dough, shaped into various forms, and typically served with sauces like marinara, Alfredo, or pesto.'),
('Hummus', 'Hummus is a traditional Middle Eastern dip made from blended chickpeas, tahini, lemon juice, and garlic, often served with olive oil. Creamy and flavorful, it is typically enjoyed with pita bread or vegetables.'),
('Pizza Margherita', 'Pizza Margherita is a classic Italian dish made with a simple topping of tomatoes, fresh mozzarella, and basil on a thin crust, often baked in a wood-fired oven.'),
('Sushi', 'Sushi is a traditional Japanese dish featuring vinegared rice accompanied by various ingredients such as raw fish, vegetables, and seaweed, often served with soy sauce, wasabi, and pickled ginger.'),
('Tacos', 'Tacos are a traditional Mexican dish consisting of small, hand-sized tortillas filled with a variety of ingredients such as seasoned meat, vegetables, and salsa, often topped with cheese, guacamole, and sour cream.'),
('Spaghetti Carbonara', 'Spaghetti Carbonara is a classic Italian pasta dish made with eggs, cheese (usually Pecorino Romano or Parmesan), pancetta, and pepper, mixed together with hot pasta to create a creamy sauce.'),
('Butter Chicken', 'Butter Chicken, or Murgh Makhani, is a famous Indian dish featuring chicken marinated in yogurt and spices, cooked in a rich tomato and butter-based sauce, typically served with naan or rice.'),
('Croissant', 'Croissant is a buttery, flaky pastry of Austrian origin but popularized in France. It''s made from layered yeast-leavened dough, often enjoyed for breakfast or as a snack.'),
('Shawarma', 'Shawarma is a Middle Eastern dish where seasoned meat, often lamb, beef, or chicken, is slow-cooked on a vertical rotisserie and served in flatbread or pita with vegetables and sauces.'),
('Fish and Chips', 'Fish and Chips is a classic British dish featuring battered and deep-fried fish, usually cod or haddock, served with thick-cut fries and often accompanied by tartar sauce or vinegar.'),
('Hot Dog', 'A hot dog is a grilled or steamed sausage, typically made from beef or pork, served in a sliced bun, and often topped with mustard, ketchup, onions, or relish.'),
('Pancakes', 'Pancakes are a popular breakfast dish made from a batter of flour, eggs, milk, and baking powder, cooked on a griddle or frying pan and often served with syrup and butter.');

COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;