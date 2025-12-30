FROM eclipse-temurin:25

WORKDIR java-app

COPY src/ .

RUN javac Main.java

ENTRYPOINT ["java"]

CMD ["Main"]
