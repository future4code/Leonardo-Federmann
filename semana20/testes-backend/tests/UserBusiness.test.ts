import { UserBusiness } from "../src/business/UserBusiness"
import { UserDatabase } from "../src/data/UserDatabase"

import hashGeneratorMock from "./mocks/hashGeneratorMock"
import idGeneratorMock from "./mocks/idGeneratorMock"
import tokenGeneratorMock from "./mocks/tokenGeneratorMock"
import userDatabaseMock from "./mocks/UserDatabaseMock"
import { userMockAdmin } from "./mocks/UserMock"

const userBusinessMock = new UserBusiness(
  idGeneratorMock,
  hashGeneratorMock,
  userDatabaseMock as UserDatabase,
  tokenGeneratorMock
)

describe("UserBusiness", () => {
  describe("signup", () => {
    test("Should catch error when name is empty", async () => {
      expect.assertions(2)

      try {
        await userBusinessMock.signup(
          "",
          "test@email.com",
          "test123",
          "NORMAL"
        )
        
      } catch (error) {
        expect(error.statusCode).toBe(422)
        expect(error.message).toBe("Missing input")
      }
    })

    test("Should catch error when email is invalid", async () => {
      expect.assertions(2)

      try {
        await userBusinessMock.signup(
          "test",
          "testemail.com",
          "test123",
          "NORMAL"
        )
        
      } catch (error) {
        expect(error.statusCode).toBe(422)
        expect(error.message).toBe("Invalid email")
      }
    })

    test("Should catch error when password is invalid", async () => {
      expect.assertions(2)

      try {
        await userBusinessMock.signup(
          "test",
          "test@email.com",
          "test",
          "NORMAL"
        )
        
      } catch (error) {
        expect(error.statusCode).toBe(422)
        expect(error.message).toBe("Invalid password")
      }
    })

    test("Should catch error when role is invalid", async () => {
      expect.assertions(2)

      try {
        await userBusinessMock.signup(
          "test",
          "test@email.com",
          "test123",
          "GUEST"
        )
        
      } catch (error) {
        expect(error.statusCode).toBe(422)
        expect(error.message).toBe("Invalid user role")
      }
    })

    test("Should return access token on sucessful signup", async () => {
      expect.assertions(1)

      try {
        const { accessToken } = await userBusinessMock.signup(
          "test",
          "test@email.com",
          "test123",
          "NORMAL"
        )

        expect(accessToken).toBe("token_mock")
        
      } catch (error) {
        console.log(error.message)
      }
    })
  })

  describe("login", () => {
    test("Should catch error when email is not registered", async () => {
      expect.assertions(2)

      try {
        await userBusinessMock.login(
          "bananinha@hotmail.com",
          "bananinha123"
        )
        
      } catch (error) {
        expect(error.statusCode).toBe(401)
        expect(error.message).toBe("Invalid credentials")
      }
    })

    test("Should catch error when password is incorrect", async () => {
      expect.assertions(2)

      try {
        await userBusinessMock.login(
          "bananinha@gmail.com",
          "bananinha12345"
        )
        
      } catch (error) {
        expect(error.statusCode).toBe(401)
        expect(error.message).toBe("Invalid credentials")
      }
    })

    test("Should return acess token on sucessful login", async () => {
      expect.assertions(1)

      try {
        const { accessToken } = await userBusinessMock.login(
          "bananinha@gmail.com",
          "bananinha123"
        )

        expect(accessToken).toBe("token_mock")
        
      } catch (error) {
        console.log(error.message)
      }
    })
  })

  describe("testing get user by id endpoint", ()=>{
    test("Should return a message of unexisting user", async()=>{
      expect.assertions(2)
      try{
        const result = await userBusinessMock.getUserBusiness('aaa')
      }catch(error){
        expect(error.statusCode).toBe(401)
        expect(error.message).toBe("Invalid id")
      }
    })

    test("Should return the searched user normally", async()=>{
      try{
        const result = userBusinessMock.getUserBusiness('id_mock_admin')
        expect(result).toEqual(userMockAdmin)
      }catch(error){
        console.log(error)
      }
    })
  })

})
