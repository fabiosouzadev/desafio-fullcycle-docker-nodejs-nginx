USE nodedb;
CREATE TABLE people (
  id int(11) NOT NULL AUTO_INCREMENT,
  name varchar(50),
  PRIMARY KEY (id)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

INSERT INTO people (id, name) VALUES (1, 'Darth Vader');
