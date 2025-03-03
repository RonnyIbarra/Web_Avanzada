
# 2. Instalamos y cargamos los paquetes necesarios
install.packages("readr")     
install.packages("rpart")      
install.packages("rpart.plot") 
install.packages("caret")      

# Cargamos las librerías
library(readr)
library(rpart)
library(rpart.plot)
library(caret)

# 3. Cargamos del dataset
titanic_data <- read.csv("C:/Dataset/Titanic-Dataset.csv")  
head(titanic_data)  
str(titanic_data)   # Ver la estructura de los datos

# 4. Limpiamos los datos, eliminando valores irrelevantes o faltantes
titanic_data_clean <- titanic_data[, c("Survived", "Pclass", "Sex", "Age", "SibSp", "Parch", "Fare", "Embarked")]
titanic_data_clean <- na.omit(titanic_data_clean)


# 5. Dividimos el dataset en entrenamiento (70%) y prueba (30%)
# Dividimos el dataset en entrenamiento (70%) y prueba (30%)
set.seed(123)
trainIndex <- createDataPartition(titanic_data_clean$Survived, p = 0.7, list = FALSE)
train_data <- titanic_data_clean[trainIndex, ]
test_data <- titanic_data_clean[-trainIndex, ]


# 6. Entrenamos un modelo de árbol de decisión con rpart()
model_train <- rpart(Survived ~ Pclass + Sex + Age + SibSp + Parch + Fare + Embarked, 
                     data = train_data, method = "class")

# 7. Visualizamos el árbol con rpart.plot()
rpart.plot(model_train)

# 8. Hacemos predicciones en el conjunto de prueba

# Asegurémonos de que las variables sean factores con los mismos niveles
# Realizar las predicciones en el conjunto de prueba
predictions <- predict(model_train, newdata = test_data, type = "class")

test_data$Survived <- factor(test_data$Survived, levels = c(0, 1))
predictions <- factor(predictions, levels = c(0, 1))

# Crear matriz de confusión
confusion_matrix <- table(test_data$Survived, predictions)

# Calcular precisión
accuracy <- sum(diag(confusion_matrix)) / sum(confusion_matrix)

# Mostrar resultados
cat("Matriz de Confusión:\n")
print(confusion_matrix)

cat("\nPrecisión del modelo:", round(accuracy * 100, 2), "%\n")

