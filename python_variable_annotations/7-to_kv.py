#!/usr/bin/env python3
"""
Docstring for python_variable_annotations.7-to_kv
"""

from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Return a tuple where the second value is the square of v as a float."""
    return (k, float(v ** 2))
