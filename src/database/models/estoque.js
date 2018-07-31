const {
  INTEGER,
  NUMBER,
  STRING,
  ENUM,
} = require('sequelize');

module.exports = (sequelize) => {
  const Estoque = sequelize.define(
    'Estoque',
    {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      quantidade: NUMBER,
      precoCompra: NUMBER,
      precoVenda: STRING,
      numeroNF: STRING,
      type: ENUM('entrada', 'saida')
    },
    {}
  );
  Estoque.associate = (models) => {
    models.Estoque.belongsTo(models.ProdutoAtividade, {
      onDelete: 'CASCADE',
      foreignKey: {
        allowNull: false,
      },
    });
  };
  return Estoque;
};
