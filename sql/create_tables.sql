
CREATE TABLE IF NOT EXISTS product(
    id SERIAL,
    name VARCHAR(250) NOT NULL, 
    price DECIMAL NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS "order"(
    id SERIAL,
    createdat TIMESTAMP WITH TIME ZONE default CURRENT_TIMESTAMP,
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS "status"(
    id SERIAL,
    "description" VARCHAR(200) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS orderstatus(
    id SERIAL,
    orderid INT NOT NULL,
    "status" INT NOT NULL,
    createat TIMESTAMP WITH TIME ZONE default CURRENT_TIMESTAMP,
    CONSTRAINT fk_order FOREIGN KEY(orderid) REFERENCES "order"(id),
    CONSTRAINT fk_status FOREIGN KEY("status") REFERENCES "status"(id)
);

CREATE TABLE IF NOT EXISTS orderproducts(
    id SERIAL,
    orderid INT NOT NULL,
    productid INT NOT NULL,
    amount INT NOT NULL,
    CONSTRAINT fk_orderid FOREIGN KEY(orderid) REFERENCES "order"(id),
    CONSTRAINT fk_productid FOREIGN KEY(productid) REFERENCES product(id)
);

INSERT INTO product(name, price) VALUES('Metalcon C 100x40x12x0.85 tira 6m', 16329);
INSERT INTO product(name, price) VALUES('Metalcon C 150x40x12x0.85 tira 6m', 18659);
INSERT INTO product(name, price) VALUES('Metalcon U 62x25x12x0.85 tira 3m', 16329);

INSERT INTO status("description") VALUES('CREATED');
INSERT INTO status("description") VALUES('IN_DELIVERY');
INSERT INTO status("description") VALUES('DELIVERED');

