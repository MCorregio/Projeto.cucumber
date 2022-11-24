Feature: Comprar Passagem
    Scenario: Comprar Passagem entre "Boston" e "Dublin"
        Given que acesso o site BlazeDemo
        When seleciono origem como "Boston" e destino como "Dublin"
        Then carrega a pagina de reservas