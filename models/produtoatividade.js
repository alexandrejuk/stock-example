module.exports = (sequelize, DataTypes) => {
  const produtoAtividade = sequelize.define(
    'produtoAtividade',
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      situacao: DataTypes.ENUM('aguardando', 'baixado'),
      quantidade: DataTypes.NUMBER,
      preco: DataTypes.NUMBER,
      type: DataTypes.ENUM('faturar', 'garantia')
    },
    {}
  );
  produtoAtividade.associate = function(models) {
    // associations can be defined here
  };
  return produtoAtividade;
};
