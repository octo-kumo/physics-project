<span></span>

## Hello World
`$ P=\frac3{10}\times\frac15\times\frac1{25}=0.0024$`

```java
public static <T extends Comparable<? super T>> T[] genericSort(T[] data) {
    for (int i = 0; i < data.length - 1; i++) {
        int min_idx = i;
        for (int j = i + 1; j < data.length; j++)
            if (data[j].compareTo(data[min_idx]) < 0)
                min_idx = j;
        T temp = data[min_idx];
        data[min_idx] = data[i];
        data[i] = temp;
    }
    return data;
}
```

This is pretty cool ngl
