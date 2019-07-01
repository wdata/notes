#include<iostream>
using namespace std;
int main(){
    char a[100],b[50];
    void Strcat(char a[],char b[]);
    cout<<"please input first string:"<<endl;
    cin>>a;
    cout<<"please input second string:"<<endl;
    cin>>b;
    Strcat(a,b);
    cout<<"The new string: "<<a;
    cout<<endl;
    return 0;
}
void Strcat(char a[],char b[]){
    int i,j;
    for(i=0;a[i]!='\0';i++);
    cout<<"Length of first string:"<<i<<endl;
    for(j=0;b[j]!='\0';j++,i++){
        a[i]=b[j];
    }
    cout<<"Length of second string:"<<j<<endl;
}
