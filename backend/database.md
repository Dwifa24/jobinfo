npx sequelize-cli db:create
npx sequelize-cli db:migrate

npx sequelize-cli model:generate --name User --attributes username:string,email:string,password:string,salt:integer,birthday:date,gender:boolean,avatar:string,type:string









    