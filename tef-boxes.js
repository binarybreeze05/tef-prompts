/* TEF practice-order — Answer-box data.
   Prompts/ads that call for the same prepared response (90% or better) share a
   box; inside a box, cores of word-for-word-equivalent items are separated by a
   dashed seam. Built 2026-09-03 by build/build_boxes_tef.py from a two-pass
   near-duplicate audit (one full read + one independent subagent per pool).
   Keys: A = EO Section A (78 ads) · B = EO Section B (81 ads)
         EA = ecrite Section A (72) · EB = ecrite Section B (73)
   Items are addressed by badge number, identical across FR / EN / images.
   Loaded lazily by tef-clusters.js the first time "Answer boxes" is picked. */

var TEF_BOXES = {
 "A": {
  "set": "EO_A",
  "total": 78,
  "unit": "ads",
  "boxes": [
   {
    "members": [
     1,
     22,
     35,
     45,
     52,
     57,
     65,
     67,
     68,
     69,
     70
    ],
    "cores": [
     [
      1,
      22,
      35,
      45,
      52,
      57,
      67,
      68,
      69,
      70
     ],
     [
      65
     ]
    ],
    "n": 1
   },
   {
    "members": [
     2,
     23,
     53,
     64,
     66
    ],
    "cores": [
     [
      2,
      53,
      64
     ],
     [
      23
     ],
     [
      66
     ]
    ],
    "n": 2
   },
   {
    "members": [
     3,
     24,
     54,
     59
    ],
    "cores": [
     [
      3,
      54,
      59
     ],
     [
      24
     ]
    ],
    "n": 3
   },
   {
    "members": [
     4,
     25,
     38
    ],
    "cores": [
     [
      4,
      38
     ],
     [
      25
     ]
    ],
    "n": 4
   },
   {
    "members": [
     5,
     29,
     73,
     77
    ],
    "cores": [
     [
      5,
      73,
      77
     ],
     [
      29
     ]
    ],
    "n": 5
   },
   {
    "members": [
     6,
     26,
     39
    ],
    "cores": [
     [
      6
     ],
     [
      26
     ],
     [
      39
     ]
    ],
    "n": 6
   },
   {
    "members": [
     7,
     36,
     46
    ],
    "cores": [
     [
      7
     ],
     [
      36,
      46
     ]
    ],
    "n": 7
   },
   {
    "members": [
     8,
     41
    ],
    "cores": [
     [
      8
     ],
     [
      41
     ]
    ],
    "n": 8
   },
   {
    "members": [
     9,
     50
    ],
    "cores": [
     [
      9
     ],
     [
      50
     ]
    ],
    "n": 9
   },
   {
    "members": [
     10,
     32,
     71
    ],
    "cores": [
     [
      10,
      32,
      71
     ]
    ],
    "n": 10
   },
   {
    "members": [
     11,
     74,
     78
    ],
    "cores": [
     [
      11,
      74,
      78
     ]
    ],
    "n": 11
   },
   {
    "members": [
     12,
     44
    ],
    "cores": [
     [
      12
     ],
     [
      44
     ]
    ],
    "n": 12
   },
   {
    "members": [
     13,
     75
    ],
    "cores": [
     [
      13,
      75
     ]
    ],
    "n": 13
   },
   {
    "members": [
     14,
     72
    ],
    "cores": [
     [
      14
     ],
     [
      72
     ]
    ],
    "n": 14
   },
   {
    "members": [
     15,
     33
    ],
    "cores": [
     [
      15
     ],
     [
      33
     ]
    ],
    "n": 15
   },
   {
    "members": [
     16,
     76
    ],
    "cores": [
     [
      16,
      76
     ]
    ],
    "n": 16
   },
   {
    "members": [
     17,
     34
    ],
    "cores": [
     [
      17
     ],
     [
      34
     ]
    ],
    "n": 17
   },
   {
    "members": [
     20,
     56
    ],
    "cores": [
     [
      20
     ],
     [
      56
     ]
    ],
    "n": 18
   },
   {
    "members": [
     27,
     40
    ],
    "cores": [
     [
      27
     ],
     [
      40
     ]
    ],
    "n": 19
   },
   {
    "members": [
     30,
     43
    ],
    "cores": [
     [
      30
     ],
     [
      43
     ]
    ],
    "n": 20
   },
   {
    "members": [
     37,
     42,
     47
    ],
    "cores": [
     [
      37
     ],
     [
      42
     ],
     [
      47
     ]
    ],
    "n": 21
   },
   {
    "members": [
     48,
     55
    ],
    "cores": [
     [
      48,
      55
     ]
    ],
    "n": 22
   },
   {
    "members": [
     60,
     63
    ],
    "cores": [
     [
      60
     ],
     [
      63
     ]
    ],
    "n": 23
   }
  ],
  "grouped": 68,
  "singles": 10,
  "answers": 33
 },
 "B": {
  "set": "EO_B",
  "total": 81,
  "unit": "ads",
  "boxes": [
   {
    "members": [
     1,
     58
    ],
    "cores": [
     [
      1
     ],
     [
      58
     ]
    ],
    "n": 1
   },
   {
    "members": [
     2,
     65
    ],
    "cores": [
     [
      2,
      65
     ]
    ],
    "n": 2
   },
   {
    "members": [
     3,
     23,
     55,
     70
    ],
    "cores": [
     [
      3
     ],
     [
      23,
      55,
      70
     ]
    ],
    "n": 3
   },
   {
    "members": [
     4,
     37,
     50
    ],
    "cores": [
     [
      4,
      37
     ],
     [
      50
     ]
    ],
    "n": 4
   },
   {
    "members": [
     5,
     45,
     64
    ],
    "cores": [
     [
      5,
      64
     ],
     [
      45
     ]
    ],
    "n": 5
   },
   {
    "members": [
     6,
     66
    ],
    "cores": [
     [
      6,
      66
     ]
    ],
    "n": 6
   },
   {
    "members": [
     7,
     27,
     72
    ],
    "cores": [
     [
      7
     ],
     [
      27
     ],
     [
      72
     ]
    ],
    "n": 7
   },
   {
    "members": [
     8,
     77,
     81
    ],
    "cores": [
     [
      8,
      77,
      81
     ]
    ],
    "n": 8
   },
   {
    "members": [
     9,
     29,
     75
    ],
    "cores": [
     [
      9,
      75
     ],
     [
      29
     ]
    ],
    "n": 9
   },
   {
    "members": [
     10,
     30,
     73
    ],
    "cores": [
     [
      10,
      73
     ],
     [
      30
     ]
    ],
    "n": 10
   },
   {
    "members": [
     11,
     31,
     78
    ],
    "cores": [
     [
      11
     ],
     [
      31
     ],
     [
      78
     ]
    ],
    "n": 11
   },
   {
    "members": [
     12,
     74
    ],
    "cores": [
     [
      12
     ],
     [
      74
     ]
    ],
    "n": 12
   },
   {
    "members": [
     13,
     76
    ],
    "cores": [
     [
      13,
      76
     ]
    ],
    "n": 13
   },
   {
    "members": [
     14,
     32
    ],
    "cores": [
     [
      14
     ],
     [
      32
     ]
    ],
    "n": 14
   },
   {
    "members": [
     15,
     79
    ],
    "cores": [
     [
      15
     ],
     [
      79
     ]
    ],
    "n": 15
   },
   {
    "members": [
     16,
     71
    ],
    "cores": [
     [
      16,
      71
     ]
    ],
    "n": 16
   },
   {
    "members": [
     17,
     51
    ],
    "cores": [
     [
      17
     ],
     [
      51
     ]
    ],
    "n": 17
   },
   {
    "members": [
     18,
     80
    ],
    "cores": [
     [
      18,
      80
     ]
    ],
    "n": 18
   },
   {
    "members": [
     20,
     63
    ],
    "cores": [
     [
      20
     ],
     [
      63
     ]
    ],
    "n": 19
   },
   {
    "members": [
     21,
     34,
     53
    ],
    "cores": [
     [
      21,
      34,
      53
     ]
    ],
    "n": 20
   },
   {
    "members": [
     22,
     48,
     54
    ],
    "cores": [
     [
      22,
      54
     ],
     [
      48
     ]
    ],
    "n": 21
   },
   {
    "members": [
     24,
     44
    ],
    "cores": [
     [
      24
     ],
     [
      44
     ]
    ],
    "n": 22
   },
   {
    "members": [
     25,
     28
    ],
    "cores": [
     [
      25
     ],
     [
      28
     ]
    ],
    "n": 23
   },
   {
    "members": [
     26,
     39,
     52
    ],
    "cores": [
     [
      26
     ],
     [
      39
     ],
     [
      52
     ]
    ],
    "n": 24
   },
   {
    "members": [
     36,
     61
    ],
    "cores": [
     [
      36
     ],
     [
      61
     ]
    ],
    "n": 25
   },
   {
    "members": [
     38,
     57
    ],
    "cores": [
     [
      38,
      57
     ]
    ],
    "n": 26
   },
   {
    "members": [
     40,
     69
    ],
    "cores": [
     [
      40,
      69
     ]
    ],
    "n": 27
   },
   {
    "members": [
     41,
     47
    ],
    "cores": [
     [
      41
     ],
     [
      47
     ]
    ],
    "n": 28
   },
   {
    "members": [
     46,
     49
    ],
    "cores": [
     [
      46
     ],
     [
      49
     ]
    ],
    "n": 29
   },
   {
    "members": [
     56,
     67
    ],
    "cores": [
     [
      56,
      67
     ]
    ],
    "n": 30
   },
   {
    "members": [
     59,
     68
    ],
    "cores": [
     [
      59,
      68
     ]
    ],
    "n": 31
   },
   {
    "members": [
     60,
     62
    ],
    "cores": [
     [
      60
     ],
     [
      62
     ]
    ],
    "n": 32
   }
  ],
  "grouped": 76,
  "singles": 5,
  "answers": 37
 },
 "EA": {
  "set": "EE_A",
  "total": 72,
  "unit": "prompts",
  "boxes": [
   {
    "members": [
     1,
     44,
     63,
     65
    ],
    "cores": [
     [
      1
     ],
     [
      44
     ],
     [
      63
     ],
     [
      65
     ]
    ],
    "n": 1
   },
   {
    "members": [
     2,
     45,
     55
    ],
    "cores": [
     [
      2
     ],
     [
      45
     ],
     [
      55
     ]
    ],
    "n": 2
   },
   {
    "members": [
     4,
     26,
     36
    ],
    "cores": [
     [
      4
     ],
     [
      26
     ],
     [
      36
     ]
    ],
    "n": 3
   },
   {
    "members": [
     5,
     23
    ],
    "cores": [
     [
      5
     ],
     [
      23
     ]
    ],
    "n": 4
   },
   {
    "members": [
     9,
     46
    ],
    "cores": [
     [
      9
     ],
     [
      46
     ]
    ],
    "n": 5
   },
   {
    "members": [
     11,
     24
    ],
    "cores": [
     [
      11
     ],
     [
      24
     ]
    ],
    "n": 6
   },
   {
    "members": [
     13,
     69
    ],
    "cores": [
     [
      13
     ],
     [
      69
     ]
    ],
    "n": 7
   },
   {
    "members": [
     14,
     19,
     31,
     54,
     61
    ],
    "cores": [
     [
      14,
      31
     ],
     [
      19
     ],
     [
      54
     ],
     [
      61
     ]
    ],
    "n": 8
   },
   {
    "members": [
     15,
     32
    ],
    "cores": [
     [
      15
     ],
     [
      32
     ]
    ],
    "n": 9
   },
   {
    "members": [
     16,
     71
    ],
    "cores": [
     [
      16,
      71
     ]
    ],
    "n": 10
   },
   {
    "members": [
     22,
     67
    ],
    "cores": [
     [
      22
     ],
     [
      67
     ]
    ],
    "n": 11
   },
   {
    "members": [
     27,
     41
    ],
    "cores": [
     [
      27
     ],
     [
      41
     ]
    ],
    "n": 12
   },
   {
    "members": [
     29,
     72
    ],
    "cores": [
     [
      29,
      72
     ]
    ],
    "n": 13
   },
   {
    "members": [
     30,
     70
    ],
    "cores": [
     [
      30,
      70
     ]
    ],
    "n": 14
   },
   {
    "members": [
     47,
     57
    ],
    "cores": [
     [
      47
     ],
     [
      57
     ]
    ],
    "n": 15
   },
   {
    "members": [
     48,
     58
    ],
    "cores": [
     [
      48
     ],
     [
      58
     ]
    ],
    "n": 16
   },
   {
    "members": [
     51,
     52
    ],
    "cores": [
     [
      51
     ],
     [
      52
     ]
    ],
    "n": 17
   },
   {
    "members": [
     56,
     68
    ],
    "cores": [
     [
      56,
      68
     ]
    ],
    "n": 18
   }
  ],
  "grouped": 43,
  "singles": 29,
  "answers": 47
 },
 "EB": {
  "set": "EE_B",
  "total": 73,
  "unit": "prompts",
  "boxes": [
   {
    "members": [
     1,
     23,
     60
    ],
    "cores": [
     [
      1
     ],
     [
      23
     ],
     [
      60
     ]
    ],
    "n": 1
   },
   {
    "members": [
     2,
     35,
     55
    ],
    "cores": [
     [
      2
     ],
     [
      35
     ],
     [
      55
     ]
    ],
    "n": 2
   },
   {
    "members": [
     3,
     47,
     69
    ],
    "cores": [
     [
      3
     ],
     [
      47,
      69
     ]
    ],
    "n": 3
   },
   {
    "members": [
     4,
     70,
     71,
     72
    ],
    "cores": [
     [
      4,
      72
     ],
     [
      70
     ],
     [
      71
     ]
    ],
    "n": 4
   },
   {
    "members": [
     8,
     67
    ],
    "cores": [
     [
      8,
      67
     ]
    ],
    "n": 5
   },
   {
    "members": [
     9,
     31,
     42
    ],
    "cores": [
     [
      9
     ],
     [
      31,
      42
     ]
    ],
    "n": 6
   },
   {
    "members": [
     10,
     43
    ],
    "cores": [
     [
      10
     ],
     [
      43
     ]
    ],
    "n": 7
   },
   {
    "members": [
     11,
     22
    ],
    "cores": [
     [
      11
     ],
     [
      22
     ]
    ],
    "n": 8
   },
   {
    "members": [
     14,
     25,
     36,
     52
    ],
    "cores": [
     [
      14
     ],
     [
      25
     ],
     [
      36
     ],
     [
      52
     ]
    ],
    "n": 9
   },
   {
    "members": [
     15,
     56
    ],
    "cores": [
     [
      15
     ],
     [
      56
     ]
    ],
    "n": 10
   },
   {
    "members": [
     16,
     48,
     73
    ],
    "cores": [
     [
      16,
      73
     ],
     [
      48
     ]
    ],
    "n": 11
   },
   {
    "members": [
     17,
     39
    ],
    "cores": [
     [
      17
     ],
     [
      39
     ]
    ],
    "n": 12
   },
   {
    "members": [
     19,
     30
    ],
    "cores": [
     [
      19
     ],
     [
      30
     ]
    ],
    "n": 13
   },
   {
    "members": [
     21,
     32
    ],
    "cores": [
     [
      21
     ],
     [
      32
     ]
    ],
    "n": 14
   },
   {
    "members": [
     24,
     51
    ],
    "cores": [
     [
      24,
      51
     ]
    ],
    "n": 15
   },
   {
    "members": [
     26,
     37
    ],
    "cores": [
     [
      26
     ],
     [
      37
     ]
    ],
    "n": 16
   },
   {
    "members": [
     27,
     38
    ],
    "cores": [
     [
      27
     ],
     [
      38
     ]
    ],
    "n": 17
   },
   {
    "members": [
     29,
     49
    ],
    "cores": [
     [
      29
     ],
     [
      49
     ]
    ],
    "n": 18
   },
   {
    "members": [
     33,
     44
    ],
    "cores": [
     [
      33
     ],
     [
      44
     ]
    ],
    "n": 19
   },
   {
    "members": [
     45,
     50,
     68
    ],
    "cores": [
     [
      45
     ],
     [
      50,
      68
     ]
    ],
    "n": 20
   },
   {
    "members": [
     58,
     63
    ],
    "cores": [
     [
      58
     ],
     [
      63
     ]
    ],
    "n": 21
   }
  ],
  "grouped": 52,
  "singles": 21,
  "answers": 42
 }
};
