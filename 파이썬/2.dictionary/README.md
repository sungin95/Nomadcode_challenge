간단히 사전에 추가, 찾기, 업데이드, 삭제 기능 넣기
참고 자료

1. Dictionary 값 수정, 추가, 삭제
   https://devinside.tistory.com/161
2. 파이썬에서 딕셔너리 키 값 체크하기
   https://www.pymoon.com/entry/%ED%8C%8C%EC%9D%B4%EC%8D%AC%EC%97%90%EC%84%9C-%EB%94%95%EC%85%94%EB%84%88%EB%A6%AC-%ED%82%A4-%EA%B0%92-%EC%B2%B4%ED%81%AC%ED%95%98%EA%B8%B0
3. f-string 사용 방법과 사용해야 하는 이유
   https://bluese05.tistory.com/70
4. 파이썬 한글
   https://docs.python.org/ko/3/tutorial/datastructures.html#dictionaries
   정답:https://gist.github.com/serranoarevalo/a830deafa1dc133b8f4e6ee19e56d0be
   내가 한거랑 차이점:
   word=None => word=""
   if dict != my_english_dict:
   print(f"You need to a send dictionary. you sent: {type(dict)}")

else:
if exp==None:
print("You need to send a word and a definition.")

    else:
      if dict.get(f"{word}"):#사전에 단어가 있음을 확인
        print(f"{word} is already on the dictionary. Won't add.")

      else:
        dict[f"{word}"] = exp
        print(f"{word} has been added.")

========================================>>>>
if type(a_dict) is not dict:
print("You need to send a dictionary. You sent:", type(a_dict))
elif word == '' or definition == '':
print("You need to send a word and a definition.")
else:
if word in a_dict:
print(f"{word} is already on the dictionary. Won't add.")
else:
a_dict[word] = definition
print(word,"has been added.")
is not 활용. + elif를 통한 좀 더 깔끔하고 가독성 좋은 문장 완성
dict는 type이다.

exp==None => word == '' or definition == ''
좀 더 보편적인 사전의 형태(난 너무 예제에 맞게만 제작)
