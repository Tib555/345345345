const examplesData = [
  {
    id: "ex1",
    title: "Задача 1",
    content: String.raw`
      <div class="condition"><b>Условие:</b> Найти I квадратичную форму поверхности:<br>
      \(x = R\cos u\cos v\)<br>
      \(y = R\cos u\sin v\)<br>
      \(z = R\sin u\)
      </div>
      \[ \vec{r} = (R \cos u \cos v, R \cos u \sin v, R \sin u) \]
      \[ \vec{r}_u = (-R \sin u \cos v, -R \sin u \sin v, R \cos u) \]
      \[ \vec{r}_v = (-R \cos u \sin v, R \cos u \cos v, 0) \]
      \[ E = \vec{r}_u^2 = R^2 \sin^2 u \cos^2 v + R^2 \sin^2 u \sin^2 v + R^2 \cos^2 u = R^2 \]
      \[ F = \vec{r}_u \cdot \vec{r}_v = 0 \]
      \[ G = \vec{r}_v^2 = R^2 \cos^2 u \sin^2 v + R^2 \cos^2 u \cos^2 v = R^2 \cos^2 u \]
      \[ I = E du^2 + 2F dudv + G dv^2 = R^2 du^2 + R^2 \cos^2 u dv^2 \]
    `
  },
  {
    id: "ex2",
    title: "Задача 2",
    content: String.raw`
      <div class="condition"><b>Условие:</b> Найти II квадратичную форму поверхности:<br>
      \(x = u\cos v\)<br>
      \(y = u\sin v\)<br>
      \(z = u^2\)
      </div>
      \[ \vec{r} = (u \cos v, u \sin v, u^2) \]
      \[ \vec{r}_u = (\cos v, \sin v, 2u) \]
      \[ \vec{r}_v = (-u \sin v, u \cos v, 0) \]
      \[ \vec{r}_{uu} = (0, 0, 2), \quad \vec{r}_{uv} = (-\sin v, \cos v, 0), \quad \vec{r}_{vv} = (-u \cos v, -u \sin v, 0) \]
      \[ [\vec{r}_u, \vec{r}_v] = (-2u^2 \cos v, -2u^2 \sin v, u) \]
      \[ W = |[\vec{r}_u, \vec{r}_v]| = \sqrt{4u^4 \cos^2 v + 4u^4 \sin^2 v + u^2} = u\sqrt{4u^2+1} \]
      \[ L = \frac{\vec{r}_{uu} \cdot [\vec{r}_u, \vec{r}_v]}{W} = \frac{2u}{u\sqrt{4u^2+1}} = \frac{2}{\sqrt{4u^2+1}} \]
      \[ M = \frac{\vec{r}_{uv} \cdot [\vec{r}_u, \vec{r}_v]}{W} = 0 \]
      \[ N = \frac{\vec{r}_{vv} \cdot [\vec{r}_u, \vec{r}_v]}{W} = \frac{2u^3\cos^2 v + 2u^3\sin^2 v}{u\sqrt{4u^2+1}} = \frac{2u^2}{\sqrt{4u^2+1}} \]
      \[ II = \frac{2}{\sqrt{4u^2+1}} du^2 + \frac{2u^2}{\sqrt{4u^2+1}} dv^2 \]
    `
  },
  {
    id: "ex3",
    title: "Задача 3",
    content: String.raw`
      <div class="condition"><b>Условие:</b> Найти I квадратичную форму поверхности:<br>
      \(x = a\sin u\cos v\)<br>
      \(y = a\sin u\sin v\)<br>
      \(z = a(\ln\operatorname{tg}\frac{u}{2} + \cos u)\)
      </div>
      \[ \vec{r}_u = \left(a \cos u \cos v, a \cos u \sin v, a \left(\frac{1}{\operatorname{tg}(u/2)} \cdot \frac{1}{2\cos^2(u/2)} - \sin u\right)\right) \]
      \[ z_u = a \left(\frac{1}{\sin u} - \sin u\right) = a \frac{1-\sin^2 u}{\sin u} = a \frac{\cos^2 u}{\sin u} \]
      \[ \vec{r}_u = \left(a \cos u \cos v, a \cos u \sin v, a \frac{\cos^2 u}{\sin u}\right) \]
      \[ \vec{r}_v = (-a \sin u \sin v, a \sin u \cos v, 0) \]
      \[ E = a^2 \cos^2 u \cos^2 v + a^2 \cos^2 u \sin^2 v + a^2 \frac{\cos^4 u}{\sin^2 u} = a^2 \cos^2 u \left(1 + \frac{\cos^2 u}{\sin^2 u}\right) = a^2 \operatorname{ctg}^2 u \]
      \[ F = 0 \]
      \[ G = a^2 \sin^2 u \sin^2 v + a^2 \sin^2 u \cos^2 v = a^2 \sin^2 u \]
      \[ I = a^2 \operatorname{ctg}^2 u du^2 + a^2 \sin^2 u dv^2 \]
    `
  },
  {
    id: "ex4",
    title: "Задача 4",
    content: String.raw`
      <div class="condition"><b>Условие:</b> Вычислить дивергенцию векторного поля в точке \(M(1; -1; 2)\):<br>
      \(\vec{F} = \frac{zy}{x}\vec{i} + \frac{zx}{y}\vec{j} + \frac{xy}{z}\vec{k}\)
      </div>
      \[ \operatorname{div} \vec{F} = \frac{\partial}{\partial x}\left(\frac{zy}{x}\right) + \frac{\partial}{\partial y}\left(\frac{zx}{y}\right) + \frac{\partial}{\partial z}\left(\frac{xy}{z}\right) \]
      \[ \operatorname{div} \vec{F} = -\frac{zy}{x^2} - \frac{zx}{y^2} - \frac{xy}{z^2} \]
      В точке \( M(1; -1; 2) \):
      \[ \operatorname{div} \vec{F}(M) = -\frac{2 \cdot (-1)}{1^2} - \frac{2 \cdot 1}{(-1)^2} - \frac{1 \cdot (-1)}{2^2} \]
      \[ \operatorname{div} \vec{F}(M) = 2 - 2 + \frac{1}{4} = 0.25 \]
    `
  },
  {
    id: "ex5",
    title: "Задача 5",
    content: String.raw`
      <div class="condition"><b>Условие:</b> Найти I квадратичную форму поверхности:<br>
      \(x = a\cos u\cos v\)<br>
      \(y = a\cos u\sin v\)<br>
      \(z = a\sin u\)
      </div>
      \[ \vec{r}_u = (-a \sin u \cos v, -a \sin u \sin v, a \cos u) \]
      \[ \vec{r}_v = (-a \cos u \sin v, a \cos u \cos v, 0) \]
      \[ E = \vec{r}_u^2 = a^2 \sin^2 u \cos^2 v + a^2 \sin^2 u \sin^2 v + a^2 \cos^2 u = a^2 \]
      \[ F = \vec{r}_u \cdot \vec{r}_v = 0 \]
      \[ G = \vec{r}_v^2 = a^2 \cos^2 u \sin^2 v + a^2 \cos^2 u \cos^2 v = a^2 \cos^2 u \]
      \[ I = a^2 du^2 + a^2 \cos^2 u dv^2 \]
    `
  },
  {
    id: "ex6",
    title: "Задача 6",
    content: String.raw`
      <div class="condition"><b>Условие:</b> Вычислить кривизну кривой \(y = \ln\sin x\) в точках \(x_1 = \pi/3\) и \(x_2 = 2\pi/3\).</div>
      \[ y' = \frac{1}{\sin x} \cdot \cos x = \operatorname{ctg} x \]
      \[ y'' = -\frac{1}{\sin^2 x} \]
      \[ k = \frac{|y''|}{(1 + (y')^2)^{3/2}} = \frac{|-1/\sin^2 x|}{(1 + \operatorname{ctg}^2 x)^{3/2}} = \frac{1/\sin^2 x}{(1/\sin^2 x)^{3/2}} = |\sin x| \]
      В точке \( x_1 = \pi/3 \):
      \[ k_1 = \sin(\pi/3) = \frac{\sqrt{3}}{2} \]
      В точке \( x_2 = 2\pi/3 \):
      \[ k_2 = \sin(2\pi/3) = \frac{\sqrt{3}}{2} \]
    `
  },
  {
    id: "ex7",
    title: "Задача 7",
    content: String.raw`
      <div class="condition"><b>Условие:</b> Найти II квадратичную форму поверхности:<br>
      \(x = R\cos v, y = R\sin v, z = u\)
      </div>
      \[ \vec{r}_u = (0, 0, 1), \quad \vec{r}_v = (-R \sin v, R \cos v, 0) \]
      \[ \vec{r}_{uu} = (0, 0, 0), \quad \vec{r}_{uv} = (0, 0, 0), \quad \vec{r}_{vv} = (-R \cos v, -R \sin v, 0) \]
      \[ [\vec{r}_u, \vec{r}_v] = (-R \cos v, -R \sin v, 0) \]
      \[ W = |[\vec{r}_u, \vec{r}_v]| = \sqrt{R^2 \cos^2 v + R^2 \sin^2 v} = R \]
      \[ L = \frac{\vec{r}_{uu} \cdot [\vec{r}_u, \vec{r}_v]}{W} = 0 \]
      \[ M = \frac{\vec{r}_{uv} \cdot [\vec{r}_u, \vec{r}_v]}{W} = 0 \]
      \[ N = \frac{\vec{r}_{vv} \cdot [\vec{r}_u, \vec{r}_v]}{W} = \frac{R^2\cos^2 v + R^2\sin^2 v}{R} = \frac{R^2}{R} = R \]
      \[ II = R dv^2 \]
    `
  },
  {
    id: "ex8",
    title: "Задача 8",
    content: String.raw`
      <div class="condition"><b>Условие:</b> Найти работу векторного поля \(\vec{A} = (2xy - y)\vec{i} + (x^2 + x)\vec{j}\) по перемещению материальной точки вдоль \(x^2 + y^2 = 4\) из \(M(2; 0)\) в \(B(-2; 0)\).</div>
      Параметризация: \( x = 2\cos t, y = 2\sin t \).
      Перемещение от \( M(2;0) \) до \( B(-2;0) \) (верхняя полуокружность, \( t \in [0, \pi] \)):
      \[ dx = -2\sin t dt, \quad dy = 2\cos t dt \]
      \[ A = \int_{L} (2xy - y)dx + (x^2 + x)dy \]
      \[ A = \int_0^\pi [(8\cos t\sin t - 2\sin t)(-2\sin t) + (4\cos^2 t + 2\cos t)(2\cos t)] dt \]
      \[ A = \int_0^\pi [-16\cos t\sin^2 t + 4\sin^2 t + 8\cos^3 t + 4\cos^2 t] dt \]
      Так как \( \int_0^\pi \cos t\sin^2 t dt = 0 \) и \( \int_0^\pi \cos^3 t dt = 0 \):
      \[ A = \int_0^\pi (4\sin^2 t + 4\cos^2 t) dt = \int_0^\pi 4 dt = 4\pi \]
    `
  },
  {
    id: "ex9",
    title: "Задача 9",
    content: String.raw`
      <div class="condition"><b>Условие:</b> Найти II квадратичную форму для поверхности:<br>
      \(x = u\cos v, y = u\sin v, z = \chi u\)
      </div>
      \[ \vec{r}_u = (\cos v, \sin v, \chi), \quad \vec{r}_v = (-u \sin v, u \cos v, 0) \]
      \[ \vec{r}_{uu} = (0, 0, 0), \quad \vec{r}_{uv} = (-\sin v, \cos v, 0), \quad \vec{r}_{vv} = (-u \cos v, -u \sin v, 0) \]
      \[ [\vec{r}_u, \vec{r}_v] = (-\chi u \cos v, -\chi u \sin v, u) \]
      \[ W = \sqrt{\chi^2 u^2 + u^2} = u\sqrt{\chi^2+1} \]
      \[ L = \frac{0}{W} = 0, \quad M = \frac{\chi u \sin v \cos v - \chi u \cos v \sin v}{W} = 0 \]
      \[ N = \frac{\chi u^2 \cos^2 v + \chi u^2 \sin^2 v}{W} = \frac{\chi u^2}{u\sqrt{\chi^2+1}} = \frac{\chi u}{\sqrt{\chi^2+1}} \]
      \[ II = \frac{\chi u}{\sqrt{\chi^2+1}} dv^2 \]
    `
  },
  {
    id: "ex10",
    title: "Задача 10",
    content: String.raw`
      <div class="condition"><b>Условие:</b> Найти I квадратичную форму поверхности:<br>
      \(x = u\cos v, y = u\sin v, z = a v\)
      </div>
      \[ \vec{r}_u = (\cos v, \sin v, 0) \]
      \[ \vec{r}_v = (-u \sin v, u \cos v, a) \]
      \[ E = \vec{r}_u^2 = \cos^2 v + \sin^2 v = 1 \]
      \[ F = \vec{r}_u \cdot \vec{r}_v = -u \sin v \cos v + u \sin v \cos v = 0 \]
      \[ G = \vec{r}_v^2 = u^2 \sin^2 v + u^2 \cos^2 v + a^2 = u^2 + a^2 \]
      \[ I = du^2 + (u^2 + a^2) dv^2 \]
    `
  },
  {
    id: "ex11",
    title: "Задача 11",
    content: String.raw`
      <div class="condition"><b>Условие:</b> Найти касательную плоскость и нормаль к поверхности \(z = x^2 + y^2\) в точке \((1; 1; 2)\).</div>
      Поверхность \( F(x,y,z) = x^2 + y^2 - z = 0 \). Точка \( M(1; 1; 2) \).
      \[ \nabla F = (2x, 2y, -1) \]
      Нормаль в точке \( M \): \( \vec{N} = (2(1), 2(1), -1) = (2, 2, -1) \)
      Уравнение касательной плоскости:
      \[ 2(X - 1) + 2(Y - 1) - 1(Z - 2) = 0 \implies 2X + 2Y - Z - 2 = 0 \]
      Уравнение нормали:
      \[ \frac{X - 1}{2} = \frac{Y - 1}{2} = \frac{Z - 2}{-1} \]
    `
  },
  {
    id: "ex12",
    title: "Задача 12",
    content: String.raw`
      <div class="condition"><b>Условие:</b> Найти касательную плоскость и нормаль (II кв. форма) для \(z = xy\) в точке \((2; 1; 2)\).</div>
      Поверхность \( z = xy \implies F(x,y,z) = xy - z = 0 \implies \nabla F = (y, x, -1) \)
      Нормаль в точке \( M \): \( \vec{N} = (1, 2, -1) \)
      Касательная плоскость:
      \[ 1(X - 2) + 2(Y - 1) - 1(Z - 2) = 0 \implies X + 2Y - Z - 2 = 0 \]
      Уравнение нормали:
      \[ \frac{X - 2}{1} = \frac{Y - 1}{2} = \frac{Z - 2}{-1} \]
      II квадратичная форма (параметры \( x, y \)):
      \[ \vec{r}_x = (1, 0, y), \quad \vec{r}_y = (0, 1, x) \]
      \[ \vec{r}_{xx} = (0,0,0), \quad \vec{r}_{xy} = (0,0,1), \quad \vec{r}_{yy} = (0,0,0) \]
      \[ [\vec{r}_x, \vec{r}_y] = (-y, -x, 1) \]
      В точке \( M(2;1;2) \): \( [\vec{r}_x, \vec{r}_y] = (-1, -2, 1) \), \( W = \sqrt{1+4+1} = \sqrt{6} \)
      \[ L = 0, \quad M = \frac{1}{\sqrt{6}}, \quad N = 0 \]
      \[ II = \frac{2}{\sqrt{6}} dxdy = \sqrt{\frac{2}{3}} dxdy \]
    `
  },
  {
    id: "ex13",
    title: "Задача 13",
    content: String.raw`
      <div class="condition"><b>Условие:</b> Найти кручение кривой: \(x = \sin t, y = \cos t, z = \operatorname{tg} t\) при \(t = \pi/4\).</div>
      При \( t = \pi/4 \): \( \sin(\pi/4) = \cos(\pi/4) = \frac{\sqrt{2}}{2} = \frac{1}{\sqrt{2}} \)
      \[ \vec{r}' = \left(\cos t, -\sin t, \frac{1}{\cos^2 t}\right) \implies \vec{r}'(\pi/4) = \left(\frac{\sqrt{2}}{2}, -\frac{\sqrt{2}}{2}, 2\right) \]
      \[ \vec{r}'' = \left(-\sin t, -\cos t, \frac{2\sin t}{\cos^3 t}\right) \implies \vec{r}''(\pi/4) = \left(-\frac{\sqrt{2}}{2}, -\frac{\sqrt{2}}{2}, 4\right) \]
      \[ \vec{r}''' = \left(-\cos t, \sin t, \frac{2\cos^2 t + 6\sin^2 t}{\cos^4 t}\right) \implies \vec{r}'''(\pi/4) = \left(-\frac{\sqrt{2}}{2}, \frac{\sqrt{2}}{2}, 16\right) \]
      \[ [\vec{r}', \vec{r}''] = \left( -\sqrt{2}, -3\sqrt{2}, -1 \right) \]
      \[ |[\vec{r}', \vec{r}'']|^2 = (-\sqrt{2})^2 + (-3\sqrt{2})^2 + (-1)^2 = 2 + 18 + 1 = 21 \]
      \[ (\vec{r}', \vec{r}'', \vec{r}''') = (-\sqrt{2})\left(-\frac{\sqrt{2}}{2}\right) + (-3\sqrt{2})\left(\frac{\sqrt{2}}{2}\right) + (-1)(16) = 1 - 3 - 16 = -18 \]
      \[ \varkappa = \frac{(\vec{r}', \vec{r}'', \vec{r}''')}{|[\vec{r}', \vec{r}'']|^2} = -\frac{18}{21} = -\frac{6}{7} \]
    `
  },
  {
    id: "ex14",
    title: "Задача 14",
    content: String.raw`
      <div class="condition"><b>Условие:</b> Найти кривизну кривой: \(x = a(2\cos t - \cos 2t), y = a(2\sin t - \sin 2t)\) в точке \(t = \pi/2\).</div>
      При \( t = \pi/2 \):
      \[ x' = a(-2\sin t + 2\sin 2t) = -2a \]
      \[ y' = a(2\cos t - 2\cos 2t) = 2a \]
      \[ x'' = a(-2\cos t + 4\cos 2t) = -4a \]
      \[ y'' = a(-2\sin t + 4\sin 2t) = -2a \]
      \[ k = \frac{|x'y'' - x''y'|}{((x')^2 + (y')^2)^{3/2}} = \frac{|(-2a)(-2a) - (-4a)(2a)|}{(4a^2 + 4a^2)^{3/2}} = \frac{12a^2}{(8a^2)^{3/2}} \]
      \[ k = \frac{12a^2}{16\sqrt{2}a^3} = \frac{3}{4\sqrt{2}a} \]
    `
  },
  {
    id: "ex15",
    title: "Задача 15",
    content: String.raw`
      <div class="condition"><b>Условие:</b> Определить II квадратичную форму поверхности:<br>
      \(x = \sqrt{u^2+a^2}\cos v\)<br>
      \(y = \sqrt{u^2+a^2}\sin v\)<br>
      \(z = a\ln(u+\sqrt{u^2+a^2})\)
      </div>
      \[ \vec{r}_u = \left(\frac{u\cos v}{\sqrt{u^2+a^2}}, \frac{u\sin v}{\sqrt{u^2+a^2}}, \frac{a}{\sqrt{u^2+a^2}}\right) \]
      \[ \vec{r}_v = \left(-\sqrt{u^2+a^2}\sin v, \sqrt{u^2+a^2}\cos v, 0\right) \]
      \[ [\vec{r}_u, \vec{r}_v] = (-a\cos v, -a\sin v, u) \]
      \[ W = \sqrt{a^2\cos^2 v + a^2\sin^2 v + u^2} = \sqrt{u^2+a^2} \]
      \[ \vec{r}_{uu} = \left(\frac{a^2\cos v}{(u^2+a^2)^{3/2}}, \frac{a^2\sin v}{(u^2+a^2)^{3/2}}, -\frac{au}{(u^2+a^2)^{3/2}}\right) \]
      \[ \vec{r}_{vv} = \left(-\sqrt{u^2+a^2}\cos v, -\sqrt{u^2+a^2}\sin v, 0\right) \]
      \[ \vec{r}_{uu} \cdot [\vec{r}_u, \vec{r}_v] = \frac{-a^3 - au^2}{(u^2+a^2)^{3/2}} = \frac{-a(u^2+a^2)}{(u^2+a^2)^{3/2}} = \frac{-a}{\sqrt{u^2+a^2}} \]
      \[ L = \frac{\vec{r}_{uu} \cdot [\vec{r}_u, \vec{r}_v]}{W} = \frac{-a/\sqrt{u^2+a^2}}{\sqrt{u^2+a^2}} = -\frac{a}{u^2+a^2} \]
      \[ M = 0 \]
      \[ \vec{r}_{vv} \cdot [\vec{r}_u, \vec{r}_v] = a\sqrt{u^2+a^2}\cos^2 v + a\sqrt{u^2+a^2}\sin^2 v = a\sqrt{u^2+a^2} \]
      \[ N = \frac{\vec{r}_{vv} \cdot [\vec{r}_u, \vec{r}_v]}{W} = \frac{a\sqrt{u^2+a^2}}{\sqrt{u^2+a^2}} = a \]
      \[ II = -\frac{a}{u^2+a^2}du^2 + a dv^2 \]
    `
  },
  {
    id: "ex16",
    title: "Задача 16",
    content: String.raw`
      <div class="condition"><b>Условие:</b> Найти длину дуги кривой: \(x = 2\sin^3 t, y = 2\cos^3 t, z = 1\), \(0 \le t \le \pi/2\).</div>
      \[ x' = 6\sin^2 t \cos t, \quad y' = -6\cos^2 t \sin t, \quad z' = 0 \]
      \[ |r'| = \sqrt{36\sin^4 t \cos^2 t + 36\cos^4 t \sin^2 t} = 6\sqrt{\sin^2 t \cos^2 t(\sin^2 t + \cos^2 t)} = 6\sin t \cos t \]
      \[ S = \int_0^{\pi/2} 6\sin t \cos t dt = \int_0^{\pi/2} 3\sin 2t dt = -\frac{3}{2}\cos 2t \Big|_0^{\pi/2} = -\frac{3}{2}(-1 - 1) = 3 \]
    `
  },
  {
    id: "ex17",
    title: "Задача 17",
    content: String.raw`
      <div class="condition"><b>Условие:</b> Найти кручение кривой: \(x = 2t, y = \ln t, z = t^2\).</div>
      \[ \vec{r}' = \left(2, \frac{1}{t}, 2t\right), \quad \vec{r}'' = \left(0, -\frac{1}{t^2}, 2\right), \quad \vec{r}''' = \left(0, \frac{2}{t^3}, 0\right) \]
      \[ [\vec{r}', \vec{r}''] = \left(\frac{4}{t}, -4, -\frac{2}{t^2}\right) \]
      \[ |[\vec{r}', \vec{r}'']|^2 = \frac{16}{t^2} + 16 + \frac{4}{t^4} = \frac{4(4t^4+4t^2+1)}{t^4} = \frac{4(2t^2+1)^2}{t^4} \]
      \[ (\vec{r}', \vec{r}'', \vec{r}''') = [\vec{r}', \vec{r}''] \cdot \vec{r}''' = -4\left(\frac{2}{t^3}\right) = -\frac{8}{t^3} \]
      \[ \varkappa = \frac{(\vec{r}', \vec{r}'', \vec{r}''')}{|[\vec{r}', \vec{r}'']|^2} = \frac{-8/t^3}{4(2t^2+1)^2/t^4} = -\frac{2t}{(2t^2+1)^2} \]
    `
  },
  {
    id: "ex18",
    title: "Задача 18",
    content: String.raw`
      <div class="condition"><b>Условие:</b> Найти кривизну кривой: \(x = t - \sin t, y = 1 - \cos t, z = 4\sin(t/2)\).</div>
      \[ \vec{r}' = (1 - \cos t, \sin t, 2\cos(t/2)) = (2\sin^2(t/2), 2\sin(t/2)\cos(t/2), 2\cos(t/2)) \]
      \[ |\vec{r}'| = \sqrt{4\sin^4(t/2) + 4\sin^2(t/2)\cos^2(t/2) + 4\cos^2(t/2)} = \sqrt{4\sin^2(t/2) + 4\cos^2(t/2)} = 2 \]
      Параметризуем длиной дуги \( s = 2t \), тогда \( d/ds = \frac{1}{2} d/dt \).
      Касательный вектор \( \vec{\tau} = \frac{\vec{r}'}{|\vec{r}'|} = (\sin^2(t/2), \sin(t/2)\cos(t/2), \cos(t/2)) \)
      \[ \frac{d\vec{\tau}}{ds} = \frac{1}{2}\frac{d\vec{\tau}}{dt} = \frac{1}{2}\left(\sin(t/2)\cos(t/2), \frac{1}{2}(\cos^2(t/2) - \sin^2(t/2)), -\frac{1}{2}\sin(t/2)\right) \]
      \[ \frac{d\vec{\tau}}{ds} = \frac{1}{4} \left(\sin t, \cos t, -\sin(t/2)\right) \]
      \[ k = \left|\frac{d\vec{\tau}}{ds}\right| = \frac{1}{4}\sqrt{\sin^2 t + \cos^2 t + \sin^2(t/2)} = \frac{1}{4}\sqrt{1 + \sin^2(t/2)} \]
    `
  },
  {
    id: "ex19",
    title: "Задача 19",
    content: String.raw`
      <div class="condition"><b>Условие:</b> Найти длину дуги кривой: \(x = a(t - \sin t), y = a(1 - \cos t)\), \(t \in [0; \pi/2]\).</div>
      \[ x' = a(1 - \cos t), \quad y' = a\sin t \]
      \[ |r'| = \sqrt{a^2(1-\cos t)^2 + a^2\sin^2 t} = a\sqrt{2 - 2\cos t} = a\sqrt{4\sin^2(t/2)} = 2a\sin(t/2) \]
      \[ S = \int_0^{\pi/2} 2a\sin(t/2) dt = -4a\cos(t/2) \Big|_0^{\pi/2} = -4a\left(\frac{\sqrt{2}}{2} - 1\right) = 2a(2 - \sqrt{2}) \]
    `
  },
  {
    id: "ex20",
    title: "Задача 20",
    content: String.raw`
      <div class="condition"><b>Условие:</b> Найти длину дуги кривой (вариант II): \(x = 3(t - \sin t), y = 3(1 - \cos t)\).</div>
      Длина одной арки циклоиды (\( t \in [0, 2\pi] \)):
      \[ x' = 3(1 - \cos t), \quad y' = 3\sin t \]
      \[ |r'| = \sqrt{9(1-\cos t)^2 + 9\sin^2 t} = 3\sqrt{2 - 2\cos t} = 6\sin(t/2) \]
      \[ S = \int_0^{2\pi} 6\sin(t/2) dt = -12\cos(t/2) \Big|_0^{2\pi} = -12(-1 - 1) = 24 \]
    `
  },
  {
    id: "ex21",
    title: "Задача 21",
    content: String.raw`
      <div class="condition"><b>Условие:</b> Найти длину дуги кривой (вариант II): \(x = a\cos^3 t, y = a\sin^3 t\), \(t \in [0; \pi/2]\).</div>
      \[ x' = -3a\cos^2 t\sin t, \quad y' = 3a\sin^2 t\cos t \]
      \[ |r'| = \sqrt{9a^2\cos^4 t\sin^2 t + 9a^2\sin^4 t\cos^2 t} = 3a\sin t\cos t \]
      \[ S = \int_0^{\pi/2} 3a\sin t\cos t dt = \frac{3a}{2} \sin^2 t \Big|_0^{\pi/2} = \frac{3a}{2} \]
    `
  },
  {
    id: "ex22",
    title: "Задача 22",
    content: String.raw`
      <div class="condition"><b>Условие:</b> Найти среднюю кривизну поверхности:<br>
      \(x = \sqrt{u^2+a^2}\cos v, y = \sqrt{u^2+a^2}\sin v, z = a\ln(u+\sqrt{u^2+a^2})\)
      </div>
      Из задачи 15 мы имеем:
      \[ E = \vec{r}_u \cdot \vec{r}_u = \frac{u^2}{u^2+a^2} + \frac{a^2}{u^2+a^2} = 1, \quad F = 0, \quad G = \vec{r}_v \cdot \vec{r}_v = u^2+a^2 \]
      \[ L = -\frac{a}{u^2+a^2}, \quad M = 0, \quad N = a \]
      Средняя кривизна:
      \[ H = \frac{EN - 2FM + GL}{2(EG - F^2)} \]
      \[ H = \frac{1 \cdot a - 0 + (u^2+a^2)\left(-\frac{a}{u^2+a^2}\right)}{2(1 \cdot (u^2+a^2) - 0)} = \frac{a - a}{2(u^2+a^2)} = 0 \]
      Поверхность минимальна, ее средняя кривизна равна 0.
    `
  }
];

if (typeof module !== 'undefined') {
  module.exports = examplesData;
}
