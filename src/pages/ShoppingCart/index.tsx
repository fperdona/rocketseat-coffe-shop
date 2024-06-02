import { TextInput } from '../../components/Form/TextInput'
import { Radio } from '../../components/Form/Radio'
import { Bank, CreditCard, CurrencyDollar, MapPin, Money } from 'phosphor-react'
import {
  Container,
  InfoContainer,
  AddressContainer,
  AddressHeading,
  PaymentContainer,
  OrderContainer,
  PaymentHeading,
  AddressForm,
  PaymentOptions,
  PaymentErrorMessage,
} from './styles'

export function ShoppingCart() {
  return (
    <div>
      <Container>
        <InfoContainer>
          <h2>Complete seu pedido</h2>
          <AddressContainer>
            <AddressHeading>
              <MapPin size={22} />
              <div>
                <span>Endereco de Entrega</span>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </AddressHeading>
            <AddressForm>
              <TextInput
                placeholder="CEP"
                type="number"
                containerProps={{ style: { gridArea: 'cep' } }}
              />

              <TextInput
                placeholder="Rua"
                containerProps={{ style: { gridArea: 'street' } }}
              />

              <TextInput
                placeholder="Número"
                containerProps={{ style: { gridArea: 'number' } }}
              />

              <TextInput
                placeholder="Complemento"
                optional
                containerProps={{ style: { gridArea: 'fullAddress' } }}
              />

              <TextInput
                placeholder="Bairro"
                containerProps={{ style: { gridArea: 'neighborhood' } }}
              />

              <TextInput
                placeholder="Cidade"
                containerProps={{ style: { gridArea: 'city' } }}
              />

              <TextInput
                placeholder="UF"
                maxLength={2}
                containerProps={{ style: { gridArea: 'state' } }}
              />
            </AddressForm>
          </AddressContainer>
          <PaymentContainer>
            <PaymentHeading>
              <CurrencyDollar size={22} />
              <div>
                <span>Pagamento</span>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </PaymentHeading>
            <PaymentOptions>
              <div>
                <Radio value="credit" isSelected={false}>
                  <CreditCard size={16} />
                  <span>Cartão de crédito</span>
                </Radio>

                <Radio value="debit" isSelected={true}>
                  <Bank size={16} />
                  <span>Cartão de débito</span>
                </Radio>

                <Radio value="cash" isSelected={false}>
                  <Money size={16} />
                  <span>Dinheiro</span>
                </Radio>
              </div>

              <PaymentErrorMessage role="alert">teste</PaymentErrorMessage>
            </PaymentOptions>
          </PaymentContainer>
        </InfoContainer>
        <InfoContainer>
          <h2>Cafés selecionados</h2>
          <OrderContainer></OrderContainer>
        </InfoContainer>
      </Container>
    </div>
  )
}
