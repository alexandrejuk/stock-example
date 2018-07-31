module.exports = (sequelize, DataTypes) => {
  const produtos = sequelize.define(
    'produtos',
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      descricao: DataTypes.STRING,
      minQuantidade: DataTypes.NUMBER,
      preco: DataTypes.NUMBER,
      categoria: DataTypes.ENUM('peça', 'acessório','software', 'equipamento', 'serviço')
    },
    {}
  );
  Produtos.associate = function(models) {
    // associations can be defined here
  };
  return produtos;
};
