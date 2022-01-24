
CREATE TABLE IF NOT EXISTS product(
    id SERIAL,
    name VARCHAR(250) NOT NULL, 
    price DECIMAL NOT NULL,
    urlimage VARCHAR(500) NOT NULL,
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

INSERT INTO product(name, price, urlimage) VALUES('Metalcon C 100x40x12x0.85 tira 6m', 16329, 'https://sodimac.scene7.com/is/image/SodimacCL/24155?fmt=jpg');
INSERT INTO product(name, price, urlimage) VALUES('Metalcon C 150x40x12x0.85 tira 6m', 18659, 'https://sodimac.scene7.com/is/image/SodimacCL/396761_01?fmt=jpg');
INSERT INTO product(name, price, urlimage) VALUES('Metalcon U 62x25x12x0.85 tira 3m', 16329, 'https://sodimac.scene7.com/is/image/SodimacCL/396680?fmt=jpg');
INSERT INTO product(name, price, urlimage) VALUES('Autoperforante hexagonal sin golilla 10x3/4" 100 unidades', 3290, 'https://sodimac.scene7.com/is/image/SodimacCL/822256_01?fmt=jpg');
INSERT INTO product(name, price, urlimage) VALUES('10 mm 120x240 cm Volcanita borde rebajado', 6100, 'https://sodimac.scene7.com/is/image/SodimacCL/738549?fmt=jpg');
INSERT INTO product(name, price, urlimage) VALUES('OSB estructural 9,5 mm 122 x 244 cm', 15990, 'https://sodimac.scene7.com/is/image/SodimacCL/52760_01?fmt=jpg');

INSERT INTO status("description") VALUES('CREATED');
INSERT INTO status("description") VALUES('IN_DELIVERY');
INSERT INTO status("description") VALUES('DELIVERED');

