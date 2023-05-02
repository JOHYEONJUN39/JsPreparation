#include <stdio.h>


void func1(int a) {
        a++;
    }

void func2(int* a) {
    (*a)++;
}

int main() {

    // int Array[5] = { 0 };
    // int sum = 0;

    // for (int i = 0; i < 5; i++) {
    //     printf("Enter %dth number: ", i + 1);
    //     scanf("%d", &Array[i]);
    //     sum += Array[i];
    // }
    // printf("\n You entered %d\n", sum);

    // int a = 2015;
    // int* pA = &a;

    // printf("&a: %d, pA: %d\n", &a, pA);
    // printf("a: %d, pA: %d\n", a, *pA);

    // (*pA)++;

    // printf("&a:%d, pA:%d\n", &a, pA);
    // printf("a:%d, pA:%d\n", a, *pA);

    // int main(void) {
    // int num = 5;
    // int *p;

    // p = &num; // 포인터 p에 변수 num의 주소를 저장

    // printf("변수 num의 값: %d\n", num);
    // printf("포인터 p가 가리키는 변수의 값: %d\n", *p);
    // printf("변수 num의 주소: %p\n", &num);
    // printf("포인터 p의 값(= 변수 num의 주소): %p\n", p);

    // int array[3] = {1, 2, 3};

    // printf("%d, %d, %d\n", *array, *(array+1))

    // return 0;

}

