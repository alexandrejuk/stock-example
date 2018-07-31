const {
  INTEGER,
  NUMBER,
  STRING,
  ENUM,
} = require('sequelize');

module.exports = (sequelize) => {
  const Produto = sequelize.define(
    'Produto',
    {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      descricao: STRING,
      minQuantidade: NUMBER,
      preco: NUMBER,
      categoria: ENUM('peça', 'acessório','software', 'equipamento', 'serviço')
    },
    {}
  );
  Produtos.associate = (models) => {
    models.Produto.belongsToMany(models.Estoque, {
      onDelete: 'CASCADE',
      foreignKey: {
        allowNull: false,
      },
    });
  };
  return Produto;
};
