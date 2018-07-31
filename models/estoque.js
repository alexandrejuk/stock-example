module.exports = (sequelize, DataTypes) => {
  const estoque = sequelize.define(
    'estoque',
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      quantidade: DataTypes.NUMBER,
      precoCompra: DataTypes.NUMBER,
      precoVenda: DataTypes.STRING,
      numeroNF: DataTypes.STRING,
      type: DataTypes.ENUM('entrada', 'saida')
    },
    {}
  );
  estoque.associate = function(models) {
    // associations can be defined here
  };
  return estoque;
};
