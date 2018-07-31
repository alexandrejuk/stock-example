const {
  INTEGER,
  NUMBER,
  STRING,
  ENUM,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const ProdutoAtividade = sequelize.define(
    'ProdutoAtividade',
    {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      situacao: ENUM('aguardando', 'baixado'),
      quantidade: NUMBER,
      preco: NUMBER,
      type: ENUM('faturar', 'garantia')
    },
    {}
  );
  ProdutoAtividade.associate = (models) => {
    models.ProdutoAtividade.belongsTo(models.Estoque, {
      onDelete: 'CASCADE',
      foreignKey: {
        allowNull: false,
      },
    });
  };
  return ProdutoAtividade;
};
